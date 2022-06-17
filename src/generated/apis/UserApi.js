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
exports.UserApiResponseProcessor = exports.UserApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class UserApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation. The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
     * Activate a User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
  async activateUser(userId, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'activateUser', 'userId');
    }
    // verify required parameter 'sendEmail' is not null or undefined
    if (sendEmail === null || sendEmail === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'activateUser', 'sendEmail');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/activate'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Assign all Apps as Target to Role
     * Assign all Apps as Target to Role
     * @param userId
     * @param roleId
     */
  async addAllAppsAsTargetToRole(userId, roleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addAllAppsAsTargetToRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addAllAppsAsTargetToRole', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Assign an Application Target to Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     */
  async addApplicationTargetToAdminRoleForUser(userId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAdminRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAdminRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAdminRoleForUser', 'appName');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Add App Instance Target to App Administrator Role given to a User
     * Assign an Application Instance Target to an Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  async addApplicationTargetToAppAdminRoleForUser(userId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAppAdminRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAppAdminRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAppAdminRoleForUser', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addApplicationTargetToAppAdminRoleForUser', 'applicationId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)))
      .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Assign a Group Target to Role
     * Assign a Group Target to Role
     * @param userId
     * @param roleId
     * @param groupId
     */
  async addGroupTargetToRole(userId, roleId, groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addGroupTargetToRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addGroupTargetToRole', 'roleId');
    }
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'addGroupTargetToRole', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Assigns a role to a user.
     * Assign a Role
     * @param userId
     * @param assignRoleRequest
     * @param disableNotifications
     */
  async assignRoleToUser(userId, assignRoleRequest, disableNotifications, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'assignRoleToUser', 'userId');
    }
    // verify required parameter 'assignRoleRequest' is not null or undefined
    if (assignRoleRequest === null || assignRoleRequest === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'assignRoleToUser', 'assignRoleRequest');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Changes a user's password by validating the user's current password. This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid password credential
     * Change Password
     * @param userId
     * @param changePasswordRequest
     * @param strict
     */
  async changePassword(userId, changePasswordRequest, strict, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'changePassword', 'userId');
    }
    // verify required parameter 'changePasswordRequest' is not null or undefined
    if (changePasswordRequest === null || changePasswordRequest === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'changePassword', 'changePasswordRequest');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/credentials/change_password'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (strict !== undefined) {
      requestContext.setQueryParam('strict', ObjectSerializer_1.ObjectSerializer.serialize(strict, 'boolean', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(changePasswordRequest, 'ChangePasswordRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid password credential
     * Change Recovery Question
     * @param userId
     * @param userCredentials
     */
  async changeRecoveryQuestion(userId, userCredentials, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'changeRecoveryQuestion', 'userId');
    }
    // verify required parameter 'userCredentials' is not null or undefined
    if (userCredentials === null || userCredentials === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'changeRecoveryQuestion', 'userCredentials');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/credentials/change_recovery_question'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(userCredentials, 'UserCredentials', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
     * Delete all User Sessions
     * @param userId
     * @param oauthTokens Revoke issued OpenID Connect and OAuth refresh and access tokens
     */
  async clearUserSessions(userId, oauthTokens, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'clearUserSessions', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/sessions'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (oauthTokens !== undefined) {
      requestContext.setQueryParam('oauthTokens', ObjectSerializer_1.ObjectSerializer.serialize(oauthTokens, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Creates a new user in your Okta organization with or without credentials.
     * Create a User
     * @param body
     * @param activate Executes activation lifecycle operation when creating the user
     * @param provider Indicates whether to create a user with a specified authentication provider
     * @param nextLogin With activate&#x3D;true, set nextLogin to \&quot;changePassword\&quot; to have the password be EXPIRED, so user must change it the next time they log in.
     */
  async createUser(body, activate, provider, nextLogin, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'createUser', 'body');
    }
    // Path Params
    const localVarPath = '/api/v1/users';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (activate !== undefined) {
      requestContext.setQueryParam('activate', ObjectSerializer_1.ObjectSerializer.serialize(activate, 'boolean', ''));
    }
    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam('provider', ObjectSerializer_1.ObjectSerializer.serialize(provider, 'boolean', ''));
    }
    // Query Params
    if (nextLogin !== undefined) {
      requestContext.setQueryParam('nextLogin', ObjectSerializer_1.ObjectSerializer.serialize(nextLogin, 'UserNextLogin', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, 'CreateUserRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
     * Delete a User
     * @param userId
     * @param sendEmail
     */
  async deactivateOrDeleteUser(userId, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'deactivateOrDeleteUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Deactivates a user. This operation can only be performed on users that do not have a `DEPROVISIONED` status. While the asynchronous operation (triggered by HTTP header `Prefer: respond-async`) is proceeding the user's `transitioningToStatus` property is `DEPROVISIONED`. The user's status is `DEPROVISIONED` when the deactivation process is complete.
     * Deactivate a User
     * @param userId
     * @param sendEmail
     */
  async deactivateUser(userId, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'deactivateUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/deactivate'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
     * Expire Password
     * @param userId
     */
  async expirePassword(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'expirePassword', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/expire_password'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login, and also sets the user's password to a temporary password returned in the response.
     * Expire Password and Set Temporary Password
     * @param userId
     */
  async expirePasswordAndGetTemporaryPassword(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'expirePasswordAndGetTemporaryPassword', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/expire_password_with_temp_password'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Initiate forgot password flow. Generates a one-time token (OTT) that can be used to reset a user's password.
     * Initiate Forgot Password
     * @param userId
     * @param sendEmail
     */
  async forgotPassword(userId, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'forgotPassword', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/credentials/forgot_password'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Resets the user's password to the specified password if the provided answer to the recovery question is correct.
     * Reset Password with Recovery Question
     * @param userId
     * @param userCredentials
     * @param sendEmail
     */
  async forgotPasswordSetNewPassword(userId, userCredentials, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'forgotPasswordSetNewPassword', 'userId');
    }
    // verify required parameter 'userCredentials' is not null or undefined
    if (userCredentials === null || userCredentials === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'forgotPasswordSetNewPassword', 'userCredentials');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/credentials/forgot_password_recovery_question'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(userCredentials, 'UserCredentials', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Get linked objects for a user, relationshipName can be a primary or associated relationship name
     * List all Linked Objects
     * @param userId
     * @param relationshipName
     * @param after
     * @param limit
     */
  async getLinkedObjectsForUser(userId, relationshipName, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getLinkedObjectsForUser', 'userId');
    }
    // verify required parameter 'relationshipName' is not null or undefined
    if (relationshipName === null || relationshipName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getLinkedObjectsForUser', 'relationshipName');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/linkedObjects/{relationshipName}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'relationshipName' + '}', encodeURIComponent(String(relationshipName)));
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Gets a refresh token issued for the specified User and Client.
     * Retrieve a Refresh Token for a Client
     * @param userId
     * @param clientId
     * @param tokenId
     * @param expand
     * @param limit
     * @param after
     */
  async getRefreshTokenForUserAndClient(userId, clientId, tokenId, expand, limit, after, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getRefreshTokenForUserAndClient', 'userId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getRefreshTokenForUserAndClient', 'clientId');
    }
    // verify required parameter 'tokenId' is not null or undefined
    if (tokenId === null || tokenId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getRefreshTokenForUserAndClient', 'tokenId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients/{clientId}/tokens/{tokenId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)))
      .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', ''));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Fetches a user from your Okta organization.
     * Retrieve a User
     * @param userId
     */
  async getUser(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Gets a grant for the specified user
     * Retrieve a User Grant
     * @param userId
     * @param grantId
     * @param expand
     */
  async getUserGrant(userId, grantId, expand, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getUserGrant', 'userId');
    }
    // verify required parameter 'grantId' is not null or undefined
    if (grantId === null || grantId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getUserGrant', 'grantId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/grants/{grantId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'grantId' + '}', encodeURIComponent(String(grantId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Gets role that is assigned to user.
     * Retrieve a Role
     * @param userId
     * @param roleId
     */
  async getUserRole(userId, roleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getUserRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'getUserRole', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
     * List all Assigned Application Links
     * @param userId
     */
  async listAppLinks(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listAppLinks', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/appLinks'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists all App targets for an `APP_ADMIN` Role assigned to a User. This methods return list may include full Applications or Instances. The response for an instance will have an `ID` value, while Application will not have an ID.
     * List all Application Targets for Application Administrator Role
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
  async listApplicationTargetsForApplicationAdministratorRoleForUser(userId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listApplicationTargetsForApplicationAdministratorRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listApplicationTargetsForApplicationAdministratorRoleForUser', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists all roles assigned to a user.
     * List all Assigned Roles
     * @param userId
     * @param expand
     */
  async listAssignedRolesForUser(userId, expand, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listAssignedRolesForUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists all grants for a specified user and client
     * List all Grants for a Client
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  async listGrantsForUserAndClient(userId, clientId, expand, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listGrantsForUserAndClient', 'userId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listGrantsForUserAndClient', 'clientId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients/{clientId}/grants'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * List all Group Targets for Role
     * @param userId
     * @param roleId
     * @param after
     * @param limit
     */
  async listGroupTargetsForRole(userId, roleId, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listGroupTargetsForRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listGroupTargetsForRole', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/groups'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists all refresh tokens issued for the specified User and Client.
     * List all Refresh Tokens for a Client
     * @param userId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  async listRefreshTokensForUserAndClient(userId, clientId, expand, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listRefreshTokensForUserAndClient', 'userId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listRefreshTokensForUserAndClient', 'clientId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients/{clientId}/tokens'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists all client resources for which the specified user has grants or tokens.
     * List all Clients
     * @param userId
     */
  async listUserClients(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listUserClients', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists all grants for the specified user
     * List all User Grants
     * @param userId
     * @param scopeId
     * @param expand
     * @param after
     * @param limit
     */
  async listUserGrants(userId, scopeId, expand, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listUserGrants', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/grants'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (scopeId !== undefined) {
      requestContext.setQueryParam('scopeId', ObjectSerializer_1.ObjectSerializer.serialize(scopeId, 'string', ''));
    }
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
    }
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
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Fetches the groups of which the user is a member.
     * List all Groups
     * @param userId
     */
  async listUserGroups(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listUserGroups', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/groups'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists the IdPs associated with the user.
     * List all Identity Providers
     * @param userId
     */
  async listUserIdentityProviders(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'listUserIdentityProviders', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/idps'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
     * List all Users
     * @param after The cursor to use for pagination. It is an opaque string that specifies your current location in the list and is obtained from the &#x60;Link&#x60; response header. See [Pagination](https://developer.okta.com/docs/reference/core-okta-api/#pagination) for more information.
     * @param q Finds a user that matches firstName, lastName, and email properties
     * @param limit Specifies the number of results returned. Defaults to 10 if &#x60;q&#x60; is provided.
     * @param filter Filters users with a supported expression for a subset of properties
     * @param search Searches for users with a supported filtering  expression for most properties
     * @param sortBy
     * @param sortOrder
     */
  async listUsers(after, q, limit, filter, search, sortBy, sortOrder, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/users';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
    }
    // Query Params
    if (q !== undefined) {
      requestContext.setQueryParam('q', ObjectSerializer_1.ObjectSerializer.serialize(q, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam('filter', ObjectSerializer_1.ObjectSerializer.serialize(filter, 'string', ''));
    }
    // Query Params
    if (search !== undefined) {
      requestContext.setQueryParam('search', ObjectSerializer_1.ObjectSerializer.serialize(search, 'string', ''));
    }
    // Query Params
    if (sortBy !== undefined) {
      requestContext.setQueryParam('sortBy', ObjectSerializer_1.ObjectSerializer.serialize(sortBy, 'string', ''));
    }
    // Query Params
    if (sortOrder !== undefined) {
      requestContext.setQueryParam('sortOrder', ObjectSerializer_1.ObjectSerializer.serialize(sortOrder, 'string', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Fetch a user by `id`, `login`, or `login shortname` if the short name is unambiguous.
     * Update a User
     * @param userId
     * @param user
     * @param strict
     */
  async partialUpdateUser(userId, user, strict, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'partialUpdateUser', 'userId');
    }
    // verify required parameter 'user' is not null or undefined
    if (user === null || user === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'partialUpdateUser', 'user');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (strict !== undefined) {
      requestContext.setQueryParam('strict', ObjectSerializer_1.ObjectSerializer.serialize(strict, 'boolean', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(user, 'UpdateUserRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Reactivates a user.  This operation can only be performed on users with a `PROVISIONED` status.  This operation restarts the activation workflow if for some reason the user activation was not completed when using the activationToken from [Activate User](#activate-user).
     * Reactivate a User
     * @param userId
     * @param sendEmail Sends an activation email to the user if true
     */
  async reactivateUser(userId, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'reactivateUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/reactivate'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Remove App Instance Target to App Administrator Role given to a User
     * Unassign an Application Instance Target to Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     * @param applicationId
     */
  async removeApplicationTargetFromAdministratorRoleForUser(userId, roleId, appName, applicationId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromAdministratorRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromAdministratorRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromAdministratorRoleForUser', 'appName');
    }
    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromAdministratorRoleForUser', 'applicationId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}/{applicationId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)))
      .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Unassign an Application Target from Application Administrator Role
     * @param userId
     * @param roleId
     * @param appName
     */
  async removeApplicationTargetFromApplicationAdministratorRoleForUser(userId, roleId, appName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromApplicationAdministratorRoleForUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromApplicationAdministratorRoleForUser', 'roleId');
    }
    // verify required parameter 'appName' is not null or undefined
    if (appName === null || appName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeApplicationTargetFromApplicationAdministratorRoleForUser', 'appName');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/catalog/apps/{appName}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'appName' + '}', encodeURIComponent(String(appName)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Unassign a Group Target from Role
     * Unassign a Group Target from Role
     * @param userId
     * @param roleId
     * @param groupId
     */
  async removeGroupTargetFromRole(userId, roleId, groupId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeGroupTargetFromRole', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeGroupTargetFromRole', 'roleId');
    }
    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeGroupTargetFromRole', 'groupId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
      .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Delete linked objects for a user, relationshipName can be ONLY a primary relationship name
     * Delete a Linked Object
     * @param userId
     * @param relationshipName
     */
  async removeLinkedObjectForUser(userId, relationshipName, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeLinkedObjectForUser', 'userId');
    }
    // verify required parameter 'relationshipName' is not null or undefined
    if (relationshipName === null || relationshipName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeLinkedObjectForUser', 'relationshipName');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/linkedObjects/{relationshipName}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'relationshipName' + '}', encodeURIComponent(String(relationshipName)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Unassigns a role from a user.
     * Delete a Role
     * @param userId
     * @param roleId
     */
  async removeRoleFromUser(userId, roleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeRoleFromUser', 'userId');
    }
    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'removeRoleFromUser', 'roleId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/roles/{roleId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
     * Reset all Factors
     * @param userId
     */
  async resetFactors(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'resetFactors', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/reset_factors'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
     * Reset Password
     * @param userId
     * @param sendEmail
     */
  async resetPassword(userId, sendEmail, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'resetPassword', 'userId');
    }
    // verify required parameter 'sendEmail' is not null or undefined
    if (sendEmail === null || sendEmail === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'resetPassword', 'sendEmail');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/reset_password'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (sendEmail !== undefined) {
      requestContext.setQueryParam('sendEmail', ObjectSerializer_1.ObjectSerializer.serialize(sendEmail, 'boolean', ''));
    }
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Revokes all grants for the specified user and client
     * Revoke all Grants for a Client
     * @param userId
     * @param clientId
     */
  async revokeGrantsForUserAndClient(userId, clientId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeGrantsForUserAndClient', 'userId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeGrantsForUserAndClient', 'clientId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients/{clientId}/grants'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Revokes the specified refresh token.
     * Revoke a Token for a Client
     * @param userId
     * @param clientId
     * @param tokenId
     */
  async revokeTokenForUserAndClient(userId, clientId, tokenId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeTokenForUserAndClient', 'userId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeTokenForUserAndClient', 'clientId');
    }
    // verify required parameter 'tokenId' is not null or undefined
    if (tokenId === null || tokenId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeTokenForUserAndClient', 'tokenId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients/{clientId}/tokens/{tokenId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)))
      .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Revokes all refresh tokens issued for the specified User and Client.
     * Revoke all Refresh Tokens for a Client
     * @param userId
     * @param clientId
     */
  async revokeTokensForUserAndClient(userId, clientId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeTokensForUserAndClient', 'userId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeTokensForUserAndClient', 'clientId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/clients/{clientId}/tokens'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Revokes one grant for a specified user
     * Revoke a User Grant
     * @param userId
     * @param grantId
     */
  async revokeUserGrant(userId, grantId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeUserGrant', 'userId');
    }
    // verify required parameter 'grantId' is not null or undefined
    if (grantId === null || grantId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeUserGrant', 'grantId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/grants/{grantId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
      .replace('{' + 'grantId' + '}', encodeURIComponent(String(grantId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Revokes all grants for a specified user
     * Revoke all User Grants
     * @param userId
     */
  async revokeUserGrants(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'revokeUserGrants', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/grants'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Sets a linked object for two users.
     * Create a Linked Object for two User
     * @param associatedUserId
     * @param primaryRelationshipName
     * @param primaryUserId
     */
  async setLinkedObjectForUser(associatedUserId, primaryRelationshipName, primaryUserId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'associatedUserId' is not null or undefined
    if (associatedUserId === null || associatedUserId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'setLinkedObjectForUser', 'associatedUserId');
    }
    // verify required parameter 'primaryRelationshipName' is not null or undefined
    if (primaryRelationshipName === null || primaryRelationshipName === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'setLinkedObjectForUser', 'primaryRelationshipName');
    }
    // verify required parameter 'primaryUserId' is not null or undefined
    if (primaryUserId === null || primaryUserId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'setLinkedObjectForUser', 'primaryUserId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{associatedUserId}/linkedObjects/{primaryRelationshipName}/{primaryUserId}'
      .replace('{' + 'associatedUserId' + '}', encodeURIComponent(String(associatedUserId)))
      .replace('{' + 'primaryRelationshipName' + '}', encodeURIComponent(String(primaryRelationshipName)))
      .replace('{' + 'primaryUserId' + '}', encodeURIComponent(String(primaryUserId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
     * Suspend a User
     * @param userId
     */
  async suspendUser(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'suspendUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/suspend'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
     * Unlock a User
     * @param userId
     */
  async unlockUser(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'unlockUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/unlock'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
     * Unsuspend a User
     * @param userId
     */
  async unsuspendUser(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'unsuspendUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}/lifecycle/unsuspend'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
     * Update a user's profile and/or credentials using strict-update semantics.
     * Replace a User
     * @param userId
     * @param user
     * @param strict
     */
  async updateUser(userId, user, strict, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'updateUser', 'userId');
    }
    // verify required parameter 'user' is not null or undefined
    if (user === null || user === undefined) {
      throw new baseapi_1.RequiredError('UserApi', 'updateUser', 'user');
    }
    // Path Params
    const localVarPath = '/api/v1/users/{userId}'
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (strict !== undefined) {
      requestContext.setQueryParam('strict', ObjectSerializer_1.ObjectSerializer.serialize(strict, 'boolean', ''));
    }
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(user, 'UpdateUserRequest', ''), contentType);
    requestContext.setBody(serializedBody);
    let authMethod;
    // Apply auth methods
    authMethod = _config.authMethods['API_Token'];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods['OAuth_2.0'];
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
exports.UserApiRequestFactory = UserApiRequestFactory;
class UserApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserActivationToken', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserActivationToken', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAllAppsAsTargetToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addAllAppsAsTargetToRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to addApplicationTargetToAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addApplicationTargetToAdminRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to addApplicationTargetToAppAdminRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addApplicationTargetToAppAdminRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to addGroupTargetToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async addGroupTargetToRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to assignRoleToUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async assignRoleToUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Role', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to changePassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  async changePassword(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserCredentials', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserCredentials', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to changeRecoveryQuestion
     * @throws ApiException if the response code was not in [200, 299]
     */
  async changeRecoveryQuestion(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserCredentials', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserCredentials', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clearUserSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
  async clearUserSessions(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateOrDeleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateOrDeleteUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('202', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to deactivateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to expirePassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  async expirePassword(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expirePasswordAndGetTemporaryPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  async expirePasswordAndGetTemporaryPassword(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'TempPassword', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'TempPassword', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to forgotPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  async forgotPassword(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ForgotPasswordResponse', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ForgotPasswordResponse', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to forgotPasswordSetNewPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  async forgotPasswordSetNewPassword(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserCredentials', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserCredentials', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLinkedObjectsForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getLinkedObjectsForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<any>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<any>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRefreshTokenForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getRefreshTokenForUserAndClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2RefreshToken', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2RefreshToken', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getUserGrant(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2ScopeConsentGrant', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2ScopeConsentGrant', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getUserRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Role', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to listAppLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAppLinks(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AppLink>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AppLink>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to listAssignedRolesForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAssignedRolesForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Role>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to listGrantsForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listGrantsForUserAndClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2ScopeConsentGrant>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2ScopeConsentGrant>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to listRefreshTokensForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listRefreshTokensForUserAndClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2RefreshToken>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2RefreshToken>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserClients
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUserClients(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2Client>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2Client>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserGrants
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUserGrants(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2ScopeConsentGrant>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2ScopeConsentGrant>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUserGroups(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Group>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to listUserIdentityProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUserIdentityProviders(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentityProvider>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentityProvider>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUsers(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<User>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to partialUpdateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async partialUpdateUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reactivateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async reactivateUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserActivationToken', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'UserActivationToken', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeApplicationTargetFromAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeApplicationTargetFromAdministratorRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to removeApplicationTargetFromApplicationAdministratorRoleForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeApplicationTargetFromApplicationAdministratorRoleForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to removeGroupTargetFromRole
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeGroupTargetFromRole(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to removeLinkedObjectForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeLinkedObjectForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to removeRoleFromUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async removeRoleFromUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to resetFactors
     * @throws ApiException if the response code was not in [200, 299]
     */
  async resetFactors(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to resetPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
  async resetPassword(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ResetPasswordToken', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ResetPasswordToken', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeGrantsForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeGrantsForUserAndClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to revokeTokenForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeTokenForUserAndClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to revokeTokensForUserAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeTokensForUserAndClient(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to revokeUserGrant
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeUserGrant(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to revokeUserGrants
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeUserGrants(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to setLinkedObjectForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async setLinkedObjectForUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('204', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to suspendUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async suspendUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to unlockUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unlockUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to unsuspendUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unsuspendUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
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
     * @params response Response returned by the server for a request to updateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('400', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(400, 'Bad Request', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(404, 'Not Found', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Error', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'User', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.UserApiResponseProcessor = UserApiResponseProcessor;
