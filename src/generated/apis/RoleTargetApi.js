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
exports.RoleTargetApiResponseProcessor = exports.RoleTargetApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class RoleTargetApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Assigns all apps as target to an `APP_ADMIN` role
     * Assign all apps as target to admin role
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     */
  async assignAllAppsAsTargetToRoleForUser(userId, roleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAllAppsAsTargetToRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAllAppsAsTargetToRoleForUser', 'roleId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns an app instance target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
     * Assign a group role app instance target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  async assignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForGroup', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForGroup', 'applicationId');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
      ['applicationId']: String(applicationId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns an app instance target to an `APP_ADMIN` role assignment to an admin user. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permission to the same OIN app. > For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage specific configurations of the Salesforce app.
     * Assign an admin role app instance target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  async assignAppInstanceTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForUser', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppInstanceTargetToAppAdminRoleForUser', 'applicationId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
      ['applicationId']: String(applicationId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns an app instance target to an `APP_ADMIN` role assignment to a client. When you assign the first OIN app or app instance target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  > **Note:** You can target a mixture of both OIN app and app instance targets, but you can\'t assign permissions to manage all instances of an OIN app and then assign a subset of permissions to the same app. For example, you can\'t specify that an admin has access to manage all instances of the Salesforce app and then also manage only specific configurations of the Salesforce app.
     * Assign a client role app instance target
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param appId Application ID
     */
  async assignAppTargetInstanceRoleForClient(clientId, roleAssignmentId, appName, appId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetInstanceRoleForClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetInstanceRoleForClient', 'roleAssignmentId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetInstanceRoleForClient', 'appName');
    }
    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetInstanceRoleForClient', 'appId');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/catalog/apps/{appName}/{appId}';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
      ['appName']: String(appName),
      ['appId']: String(appId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns an OIN app target for an `APP_ADMIN` role assignment to a client. When you assign an app target from the OIN catalog, you reduce the scope of the role assignment. The role assignment applies to only app instances that are included in the specified OIN app target.  An assigned OIN app target overrides any existing app instance targets. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the administrator for all Facebook instances.
     * Assign a client role app target
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  async assignAppTargetRoleToClient(clientId, roleAssignmentId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetRoleToClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetRoleToClient', 'roleAssignmentId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetRoleToClient', 'appName');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/catalog/apps/{appName}';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
      ['appName']: String(appName),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns an OIN app target to an `APP_ADMIN` role assignment to a group. When you assign the first OIN app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target. An OIN app target that\'s assigned to the role overrides any existing instance targets of the OIN app. For example, if a user is assigned to administer a specific Facebook instance, a successful request to add an OIN app with `facebook` for `appName` makes that user the administrator for all Facebook instances.
     * Assign a group role app target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  async assignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetToAdminRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetToAdminRoleForGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetToAdminRoleForGroup', 'appName');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns an OIN app target for an `APP_ADMIN` role assignment to an admin user. When you assign the first app target, you reduce the scope of the role assignment. The role no longer applies to all app targets, but applies only to the specified target.  Assigning an OIN app target overrides any existing app instance targets of the OIN app. For example, if a user was assigned to administer a specific Facebook instance, a successful request to add an OIN app target with `facebook` for `appName` makes that user the admin for all Facebook instances.
     * Assign an admin role app target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  async assignAppTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetToAdminRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetToAdminRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignAppTargetToAdminRoleForUser', 'appName');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets, but applies only to the specified target.
     * Assign a client role group target
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  async assignGroupTargetRoleForClient(clientId, roleAssignmentId, groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetRoleForClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetRoleForClient', 'roleAssignmentId');
    }
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetRoleForClient', 'groupId');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/groups/{groupId}';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
      ['groupId']: String(groupId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns a group target to a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
     * Assign a group role group target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param targetGroupId
     */
  async assignGroupTargetToGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetToGroupAdminRole', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetToGroupAdminRole', 'roleId');
    }
    // verify required parameter 'targetGroupId' is not null or undefined
    if (targetGroupId === null || targetGroupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetToGroupAdminRole', 'targetGroupId');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
      ['targetGroupId']: String(targetGroupId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Assigns a group target for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. When you assign the first group target, you reduce the scope of the role assignment. The role no longer applies to all targets but applies only to the specified target.
     * Assign an admin role group target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  async assignGroupTargetToUserRole(userId, roleId, groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetToUserRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetToUserRole', 'roleId');
    }
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'assignGroupTargetToUserRole', 'groupId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
      ['groupId']: String(groupId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Retrieves all role targets for an `APP_ADMIN`, `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user by user or group assignment type. If the role isn\'t scoped to specific group targets or any app targets, an empty array `[]` is returned.
     * Retrieve a role target by assignment type
     * @param userId ID of an existing Okta user
     * @param roleIdOrEncodedRoleId The &#x60;id&#x60; of the role or Base32 encoded &#x60;id&#x60; of the role name
     * @param assignmentType Specifies the assignment type of the user
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async getRoleTargetsByUserIdAndRoleId(userId, roleIdOrEncodedRoleId, assignmentType, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'getRoleTargetsByUserIdAndRoleId', 'userId');
    }
    // verify required parameter 'roleIdOrEncodedRoleId' is not null or undefined
    if (roleIdOrEncodedRoleId === null || roleIdOrEncodedRoleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'getRoleTargetsByUserIdAndRoleId', 'roleIdOrEncodedRoleId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleIdOrEncodedRoleId}/targets';
    const vars = {
      ['userId']: String(userId),
      ['roleIdOrEncodedRoleId']: String(roleIdOrEncodedRoleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (assignmentType !== undefined) {
      requestContext.setQueryParam('assignmentType', ObjectSerializer_1.ObjectSerializer.serialize(assignmentType, '\'USER\' | \'GROUP\'', ''));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all OIN app targets for an `APP_ADMIN` role that\'s assigned to a client (by `clientId`).
     * List all client role app targets
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listAppTargetRoleToClient(clientId, roleAssignmentId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listAppTargetRoleToClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listAppTargetRoleToClient', 'roleAssignmentId');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/catalog/apps';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all app targets for an `APP_ADMIN` role assignment to a group. The response includes a list of OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app doesn\'t.
     * List all group role app targets
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listApplicationTargetsForApplicationAdministratorRoleForGroup(groupId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listApplicationTargetsForApplicationAdministratorRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listApplicationTargetsForApplicationAdministratorRoleForGroup', 'roleId');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all app targets for an `APP_ADMIN` role assigned to a user. The response is a list that includes OIN-cataloged apps or app instances. The response payload for an app instance contains the `id` property, but an OIN-cataloged app payload doesn\'t.
     * List all admin role app targets
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listApplicationTargetsForApplicationAdministratorRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listApplicationTargetsForApplicationAdministratorRoleForUser', 'roleId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
     * List all client role group targets
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listGroupTargetRoleForClient(clientId, roleAssignmentId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listGroupTargetRoleForClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listGroupTargetRoleForClient', 'roleAssignmentId');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/groups';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all group targets for a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group. If the role isn\'t scoped to specific group targets, Okta returns an empty array `[]`.
     * List all group role group targets
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listGroupTargetsForGroupRole(groupId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listGroupTargetsForGroupRole', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listGroupTargetsForGroupRole', 'roleId');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/groups';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Lists all group targets for a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user. If the role isn\'t scoped to specific group targets, an empty array `[]` is returned.
     * List all admin role group targets
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/api/#pagination) and [Link header](https://developer.okta.com/docs/api/#link-header).
     * @param limit A limit on the number of objects to return
     */
  async listGroupTargetsForRole(userId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listGroupTargetsForRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'listGroupTargetsForRole', 'roleId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/groups';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns an app instance target from a role assignment to a client app  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all the apps, delete the role assignment with the instance target and create another one.  See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
     * Unassign a client role app instance target
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param appId Application ID
     */
  async removeAppTargetInstanceRoleForClient(clientId, roleAssignmentId, appName, appId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetInstanceRoleForClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetInstanceRoleForClient', 'roleAssignmentId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetInstanceRoleForClient', 'appName');
    }
    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetInstanceRoleForClient', 'appId');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/catalog/apps/{appName}/{appId}';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
      ['appName']: String(appName),
      ['appId']: String(appId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns an OIN app target for a role assignment to a client app  > **Note:** You can\'t remove the last OIN app target from a role assignment. > If you need a role assignment that applies to all apps, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
     * Unassign a client role app target
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  async removeAppTargetRoleFromClient(clientId, roleAssignmentId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetRoleFromClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetRoleFromClient', 'roleAssignmentId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeAppTargetRoleFromClient', 'appName');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/catalog/apps/{appName}';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
      ['appName']: String(appName),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns a Group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a client app.  > **Note:** You can\'t remove the last group target from a role assignment. If you need a role assignment that applies to all groups, delete the role assignment with the target and create another one. See [Unassign a client role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentClient/#tag/RoleAssignmentClient/operation/deleteRoleFromClient).
     * Unassign a client role group target
     * @param clientId &#x60;client_id&#x60; of the app
     * @param roleAssignmentId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  async removeGroupTargetRoleFromClient(clientId, roleAssignmentId, groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeGroupTargetRoleFromClient', 'clientId');
    }
    // verify required parameter 'roleAssignmentId' is not null or undefined
    if (roleAssignmentId === null || roleAssignmentId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeGroupTargetRoleFromClient', 'roleAssignmentId');
    }
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'removeGroupTargetRoleFromClient', 'groupId');
    }
    // Path Params
    const path = '/oauth2/v1/clients/{clientId}/roles/{roleAssignmentId}/targets/groups/{groupId}';
    const vars = {
      ['clientId']: String(clientId),
      ['roleAssignmentId']: String(roleAssignmentId),
      ['groupId']: String(groupId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns an app instance target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last app instance target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment and recreate a new one.
     * Unassign an admin role app instance target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  async unassignAppInstanceTargetFromAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetFromAdminRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetFromAdminRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetFromAdminRoleForUser', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetFromAdminRoleForUser', 'applicationId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
      ['applicationId']: String(applicationId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns an app instance target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app instance target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
     * Unassign a group role app instance target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     * @param applicationId Application ID
     */
  async unassignAppInstanceTargetToAppAdminRoleForGroup(groupId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetToAppAdminRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetToAppAdminRoleForGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetToAppAdminRoleForGroup', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppInstanceTargetToAppAdminRoleForGroup', 'applicationId');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
      ['applicationId']: String(applicationId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns an OIN app target from an `APP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last OIN app target from a role assignment since this causes an exception. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment to the user and recreate a new one.
     * Unassign an admin role app target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  async unassignAppTargetFromAppAdminRoleForUser(userId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppTargetFromAppAdminRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppTargetFromAppAdminRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppTargetFromAppAdminRoleForUser', 'appName');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns an OIN app target from an `APP_ADMIN` role assignment to a group  > **Note:** You can\'t remove the last app target from a role assignment. > If you need a role assignment that applies to all apps, delete the `APP_ADMIN` role assignment with the target and create another one. See [Unassign a group role](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/RoleAssignmentBGroup/#tag/RoleAssignmentBGroup/operation/unassignRoleFromGroup).
     * Unassign a group role app target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param appName Name of the app definition (the OIN catalog app key name)
     */
  async unassignAppTargetToAdminRoleForGroup(groupId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppTargetToAdminRoleForGroup', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppTargetToAdminRoleForGroup', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignAppTargetToAdminRoleForGroup', 'appName');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/catalog/apps/{appName}';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
      ['appName']: String(appName),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns a group target from a [`USER_ADMIN`](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles), `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to a group.
     * Unassign a group role group target
     * @param groupId The &#x60;id&#x60; of the group
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param targetGroupId
     */
  async unassignGroupTargetFromGroupAdminRole(groupId, roleId, targetGroupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignGroupTargetFromGroupAdminRole', 'groupId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignGroupTargetFromGroupAdminRole', 'roleId');
    }
    // verify required parameter 'targetGroupId' is not null or undefined
    if (targetGroupId === null || targetGroupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignGroupTargetFromGroupAdminRole', 'targetGroupId');
    }
    // Path Params
    const path = '/api/v1/groups/{groupId}/roles/{roleId}/targets/groups/{targetGroupId}';
    const vars = {
      ['groupId']: String(groupId),
      ['roleId']: String(roleId),
      ['targetGroupId']: String(targetGroupId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
     * Unassigns a group target from a `USER_ADMIN`, `HELP_DESK_ADMIN`, or `GROUP_MEMBERSHIP_ADMIN` role assignment to an admin user.  > **Note:** You can\'t remove the last group target from a role assignment since this causes an exception. > If you need a role assignment that applies to all groups, delete the role assignment to the user and recreate a new one.
     * Unassign an admin role group target
     * @param userId ID of an existing Okta user
     * @param roleId The &#x60;id&#x60; of the role assignment
     * @param groupId The &#x60;id&#x60; of the group
     */
  async unassignGroupTargetFromUserAdminRole(userId, roleId, groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignGroupTargetFromUserAdminRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignGroupTargetFromUserAdminRole', 'roleId');
    }
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('RoleTargetApi', 'unassignGroupTargetFromUserAdminRole', 'groupId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}';
    const vars = {
      ['userId']: String(userId),
      ['roleId']: String(roleId),
      ['groupId']: String(groupId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.DELETE, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['apiToken'];
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
exports.RoleTargetApiRequestFactory = RoleTargetApiRequestFactory;
class RoleTargetApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAllAppsAsTargetToRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAllAppsAsTargetToRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppInstanceTargetToAppAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAppInstanceTargetToAppAdminRoleForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppInstanceTargetToAppAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAppInstanceTargetToAppAdminRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetInstanceRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAppTargetInstanceRoleForClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetRoleToClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAppTargetRoleToClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetToAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAppTargetToAdminRoleForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignAppTargetToAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignAppTargetToAdminRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupTargetRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignGroupTargetRoleForClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupTargetToGroupAdminRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignGroupTargetToGroupAdminRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignGroupTargetToUserRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignGroupTargetToUserRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoleTargetsByUserIdAndRoleId
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getRoleTargetsByUserIdAndRoleId(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<RoleTarget>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<RoleTarget>'), 'Array<RoleTarget>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppTargetRoleToClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAppTargetRoleToClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<CatalogApplication>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<CatalogApplication>'), 'Array<CatalogApplication>', '');
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
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<CatalogApplication>'), 'Array<CatalogApplication>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationTargetsForApplicationAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listApplicationTargetsForApplicationAdministratorRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<CatalogApplication>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<CatalogApplication>'), 'Array<CatalogApplication>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupTargetRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroupTargetRoleForClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<Group>'), 'Array<Group>', '');
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
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<Group>'), 'Array<Group>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGroupTargetsForRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGroupTargetsForRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<Group>'), 'Array<Group>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeAppTargetInstanceRoleForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeAppTargetInstanceRoleForClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeAppTargetRoleFromClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeAppTargetRoleFromClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeGroupTargetRoleFromClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeGroupTargetRoleFromClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppInstanceTargetFromAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unassignAppInstanceTargetFromAdminRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppInstanceTargetToAppAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unassignAppInstanceTargetToAppAdminRoleForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppTargetFromAppAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unassignAppTargetFromAppAdminRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignAppTargetToAdminRoleForGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unassignAppTargetToAdminRoleForGroup(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignGroupTargetFromGroupAdminRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unassignGroupTargetFromGroupAdminRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignGroupTargetFromUserAdminRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unassignGroupTargetFromUserAdminRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'void'), 'void', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.RoleTargetApiResponseProcessor = RoleTargetApiResponseProcessor;
