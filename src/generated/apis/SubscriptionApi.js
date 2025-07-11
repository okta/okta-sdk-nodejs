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
exports.SubscriptionApiResponseProcessor = exports.SubscriptionApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class SubscriptionApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Lists all subscriptions available to a specified Role
     * List all subscriptions for a role
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     */
  async listRoleSubscriptions(roleTypeOrRoleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'roleTypeOrRoleId' is not null or undefined
    if (roleTypeOrRoleId === null || roleTypeOrRoleId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'listRoleSubscriptions', 'roleTypeOrRoleId');
    }
    // Path Params
    const path = '/api/v1/roles/{roleTypeOrRoleId}/subscriptions';
    const vars = {
      ['roleTypeOrRoleId']: String(roleTypeOrRoleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
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
     * Retrieves a subscription by `notificationType` for a specified Role
     * Retrieve a subscription for a role
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     * @param notificationType
     */
  async listRoleSubscriptionsByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'roleTypeOrRoleId' is not null or undefined
    if (roleTypeOrRoleId === null || roleTypeOrRoleId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'listRoleSubscriptionsByNotificationType', 'roleTypeOrRoleId');
    }
    // verify required parameter 'notificationType' is not null or undefined
    if (notificationType === null || notificationType === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'listRoleSubscriptionsByNotificationType', 'notificationType');
    }
    // Path Params
    const path = '/api/v1/roles/{roleTypeOrRoleId}/subscriptions/{notificationType}';
    const vars = {
      ['roleTypeOrRoleId']: String(roleTypeOrRoleId),
      ['notificationType']: String(notificationType),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
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
     * Lists all subscriptions available to a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
     * List all subscriptions for a user
     * @param userId ID of an existing Okta user
     */
  async listUserSubscriptions(userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'listUserSubscriptions', 'userId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/subscriptions';
    const vars = {
      ['userId']: String(userId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
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
     * Retrieves a subscription by `notificationType` for a specified user. Returns an `AccessDeniedException` message if requests are made for another user.
     * Retrieve a subscription for a user
     * @param notificationType
     * @param userId ID of an existing Okta user
     */
  async listUserSubscriptionsByNotificationType(notificationType, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'notificationType' is not null or undefined
    if (notificationType === null || notificationType === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'listUserSubscriptionsByNotificationType', 'notificationType');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'listUserSubscriptionsByNotificationType', 'userId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/subscriptions/{notificationType}';
    const vars = {
      ['notificationType']: String(notificationType),
      ['userId']: String(userId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
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
     * Subscribes a Role to a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
     * Subscribe a role to a specific notification type
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     * @param notificationType
     */
  async subscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'roleTypeOrRoleId' is not null or undefined
    if (roleTypeOrRoleId === null || roleTypeOrRoleId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'subscribeRoleSubscriptionByNotificationType', 'roleTypeOrRoleId');
    }
    // verify required parameter 'notificationType' is not null or undefined
    if (notificationType === null || notificationType === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'subscribeRoleSubscriptionByNotificationType', 'notificationType');
    }
    // Path Params
    const path = '/api/v1/roles/{roleTypeOrRoleId}/subscriptions/{notificationType}/subscribe';
    const vars = {
      ['roleTypeOrRoleId']: String(roleTypeOrRoleId),
      ['notificationType']: String(notificationType),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
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
     * Subscribes the current user to a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
     * Subscribe a user to a specific notification type
     * @param notificationType
     * @param userId ID of an existing Okta user
     */
  async subscribeUserSubscriptionByNotificationType(notificationType, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'notificationType' is not null or undefined
    if (notificationType === null || notificationType === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'subscribeUserSubscriptionByNotificationType', 'notificationType');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'subscribeUserSubscriptionByNotificationType', 'userId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/subscriptions/{notificationType}/subscribe';
    const vars = {
      ['notificationType']: String(notificationType),
      ['userId']: String(userId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
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
     * Unsubscribes a Role from a specified notification type. Changes to Role subscriptions override the subscription status of any individual users with the Role.
     * Unsubscribe a role from a specific notification type
     * @param roleTypeOrRoleId A reference to an existing role. Standard roles require a &#x60;roleType&#x60;, while Custom Roles require a &#x60;roleId&#x60;. See [Standard Roles](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
     * @param notificationType
     */
  async unsubscribeRoleSubscriptionByNotificationType(roleTypeOrRoleId, notificationType, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'roleTypeOrRoleId' is not null or undefined
    if (roleTypeOrRoleId === null || roleTypeOrRoleId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'unsubscribeRoleSubscriptionByNotificationType', 'roleTypeOrRoleId');
    }
    // verify required parameter 'notificationType' is not null or undefined
    if (notificationType === null || notificationType === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'unsubscribeRoleSubscriptionByNotificationType', 'notificationType');
    }
    // Path Params
    const path = '/api/v1/roles/{roleTypeOrRoleId}/subscriptions/{notificationType}/unsubscribe';
    const vars = {
      ['roleTypeOrRoleId']: String(roleTypeOrRoleId),
      ['notificationType']: String(notificationType),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
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
     * Unsubscribes the current user from a specified notification type. Returns an `AccessDeniedException` message if requests are made for another user.
     * Unsubscribe a user from a specific notification type
     * @param notificationType
     * @param userId ID of an existing Okta user
     */
  async unsubscribeUserSubscriptionByNotificationType(notificationType, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'notificationType' is not null or undefined
    if (notificationType === null || notificationType === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'unsubscribeUserSubscriptionByNotificationType', 'notificationType');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('SubscriptionApi', 'unsubscribeUserSubscriptionByNotificationType', 'userId');
    }
    // Path Params
    const path = '/api/v1/users/{userId}/subscriptions/{notificationType}/unsubscribe';
    const vars = {
      ['notificationType']: String(notificationType),
      ['userId']: String(userId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
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
exports.SubscriptionApiRequestFactory = SubscriptionApiRequestFactory;
class SubscriptionApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleSubscriptions
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listRoleSubscriptions(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Subscription>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<Subscription>'), 'Array<Subscription>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleSubscriptionsByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listRoleSubscriptionsByNotificationType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Subscription', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Subscription'), 'Subscription', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserSubscriptions
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUserSubscriptions(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Subscription>', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Array<Subscription>'), 'Array<Subscription>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserSubscriptionsByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listUserSubscriptionsByNotificationType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Subscription', '');
      return body;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
    }
    if ((0, util_1.isCodeInRange)('429', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(429, 'Too Many Requests', body, response.headers);
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType, 'Subscription'), 'Subscription', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeRoleSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async subscribeRoleSubscriptionByNotificationType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
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
     * @params response Response returned by the server for a request to subscribeUserSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async subscribeUserSubscriptionByNotificationType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
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
     * @params response Response returned by the server for a request to unsubscribeRoleSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unsubscribeRoleSubscriptionByNotificationType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
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
     * @params response Response returned by the server for a request to unsubscribeUserSubscriptionByNotificationType
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unsubscribeUserSubscriptionByNotificationType(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      return;
    }
    if ((0, util_1.isCodeInRange)('403', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'ModelError', '');
      throw new exception_1.ApiException(403, 'Forbidden', body, response.headers);
    }
    if ((0, util_1.isCodeInRange)('404', response.httpStatusCode)) {
      throw new exception_1.ApiException(response.httpStatusCode, 'Not Found', undefined, response.headers);
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
exports.SubscriptionApiResponseProcessor = SubscriptionApiResponseProcessor;
