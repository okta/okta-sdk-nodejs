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
exports.AuthorizationServerApiResponseProcessor = exports.AuthorizationServerApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class AuthorizationServerApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Activates an authorization server
     * Activate an Authorization Server
     * @param authServerId
     */
  async activateAuthorizationServer(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'activateAuthorizationServer', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/lifecycle/activate';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Activates an authorization server policy
     * Activate a Policy
     * @param authServerId
     * @param policyId
     */
  async activateAuthorizationServerPolicy(authServerId, policyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'activateAuthorizationServerPolicy', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'activateAuthorizationServerPolicy', 'policyId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/lifecycle/activate';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
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
     * Activates an authorization server policy rule
     * Activate a Policy Rule
     * @param authServerId
     * @param policyId
     * @param ruleId
     */
  async activateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'activateAuthorizationServerPolicyRule', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'activateAuthorizationServerPolicyRule', 'policyId');
    }
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'activateAuthorizationServerPolicyRule', 'ruleId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}/lifecycle/activate';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
      ['ruleId']: String(ruleId),
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
     * Creates an authorization server
     * Create an Authorization Server
     * @param authorizationServer
     */
  async createAuthorizationServer(authorizationServer, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authorizationServer' is not null or undefined
    if (authorizationServer === null || authorizationServer === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createAuthorizationServer', 'authorizationServer');
    }
    // Path Params
    const path = '/api/v1/authorizationServers';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], authorizationServer);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(authorizationServer, 'AuthorizationServer', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Creates a policy
     * Create a Policy
     * @param authServerId
     * @param policy
     */
  async createAuthorizationServerPolicy(authServerId, policy, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createAuthorizationServerPolicy', 'authServerId');
    }
    // verify required parameter 'policy' is not null or undefined
    if (policy === null || policy === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createAuthorizationServerPolicy', 'policy');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies';
    const vars = {
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], policy);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(policy, 'AuthorizationServerPolicy', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Creates a policy rule for the specified Custom Authorization Server and Policy
     * Create a Policy Rule
     * @param policyId
     * @param authServerId
     * @param policyRule
     */
  async createAuthorizationServerPolicyRule(policyId, authServerId, policyRule, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createAuthorizationServerPolicyRule', 'policyId');
    }
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createAuthorizationServerPolicyRule', 'authServerId');
    }
    // verify required parameter 'policyRule' is not null or undefined
    if (policyRule === null || policyRule === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createAuthorizationServerPolicyRule', 'policyRule');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules';
    const vars = {
      ['policyId']: String(policyId),
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], policyRule);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(policyRule, 'AuthorizationServerPolicyRule', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Creates a custom token claim
     * Create a Custom Token Claim
     * @param authServerId
     * @param oAuth2Claim
     */
  async createOAuth2Claim(authServerId, oAuth2Claim, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createOAuth2Claim', 'authServerId');
    }
    // verify required parameter 'oAuth2Claim' is not null or undefined
    if (oAuth2Claim === null || oAuth2Claim === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createOAuth2Claim', 'oAuth2Claim');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/claims';
    const vars = {
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], oAuth2Claim);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuth2Claim, 'OAuth2Claim', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Creates a custom token scope
     * Create a Custom Token Scope
     * @param authServerId
     * @param oAuth2Scope
     */
  async createOAuth2Scope(authServerId, oAuth2Scope, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createOAuth2Scope', 'authServerId');
    }
    // verify required parameter 'oAuth2Scope' is not null or undefined
    if (oAuth2Scope === null || oAuth2Scope === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'createOAuth2Scope', 'oAuth2Scope');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/scopes';
    const vars = {
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], oAuth2Scope);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuth2Scope, 'OAuth2Scope', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Deactivates an authorization server
     * Deactivate an Authorization Server
     * @param authServerId
     */
  async deactivateAuthorizationServer(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deactivateAuthorizationServer', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/lifecycle/deactivate';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Deactivates an authorization server policy
     * Deactivate a Policy
     * @param authServerId
     * @param policyId
     */
  async deactivateAuthorizationServerPolicy(authServerId, policyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deactivateAuthorizationServerPolicy', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deactivateAuthorizationServerPolicy', 'policyId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/lifecycle/deactivate';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
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
     * Deactivates an authorization server policy rule
     * Deactivate a Policy Rule
     * @param authServerId
     * @param policyId
     * @param ruleId
     */
  async deactivateAuthorizationServerPolicyRule(authServerId, policyId, ruleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deactivateAuthorizationServerPolicyRule', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deactivateAuthorizationServerPolicyRule', 'policyId');
    }
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deactivateAuthorizationServerPolicyRule', 'ruleId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}/lifecycle/deactivate';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
      ['ruleId']: String(ruleId),
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
     * Deletes an authorization server
     * Delete an Authorization Server
     * @param authServerId
     */
  async deleteAuthorizationServer(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteAuthorizationServer', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Deletes a policy
     * Delete a Policy
     * @param authServerId
     * @param policyId
     */
  async deleteAuthorizationServerPolicy(authServerId, policyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteAuthorizationServerPolicy', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteAuthorizationServerPolicy', 'policyId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
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
     * Deletes a Policy Rule defined in the specified Custom Authorization Server and Policy
     * Delete a Policy Rule
     * @param policyId
     * @param authServerId
     * @param ruleId
     */
  async deleteAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteAuthorizationServerPolicyRule', 'policyId');
    }
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteAuthorizationServerPolicyRule', 'authServerId');
    }
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteAuthorizationServerPolicyRule', 'ruleId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}';
    const vars = {
      ['policyId']: String(policyId),
      ['authServerId']: String(authServerId),
      ['ruleId']: String(ruleId),
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
     * Deletes a custom token claim
     * Delete a Custom Token Claim
     * @param authServerId
     * @param claimId
     */
  async deleteOAuth2Claim(authServerId, claimId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteOAuth2Claim', 'authServerId');
    }
    // verify required parameter 'claimId' is not null or undefined
    if (claimId === null || claimId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteOAuth2Claim', 'claimId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/claims/{claimId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['claimId']: String(claimId),
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
     * Deletes a custom token scope
     * Delete a Custom Token Scope
     * @param authServerId
     * @param scopeId
     */
  async deleteOAuth2Scope(authServerId, scopeId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteOAuth2Scope', 'authServerId');
    }
    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'deleteOAuth2Scope', 'scopeId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/scopes/{scopeId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['scopeId']: String(scopeId),
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
     * Retrieves an authorization server
     * Retrieve an Authorization Server
     * @param authServerId
     */
  async getAuthorizationServer(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getAuthorizationServer', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Retrieves a policy
     * Retrieve a Policy
     * @param authServerId
     * @param policyId
     */
  async getAuthorizationServerPolicy(authServerId, policyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getAuthorizationServerPolicy', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getAuthorizationServerPolicy', 'policyId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
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
     * Retrieves a policy rule by `ruleId`
     * Retrieve a Policy Rule
     * @param policyId
     * @param authServerId
     * @param ruleId
     */
  async getAuthorizationServerPolicyRule(policyId, authServerId, ruleId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getAuthorizationServerPolicyRule', 'policyId');
    }
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getAuthorizationServerPolicyRule', 'authServerId');
    }
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getAuthorizationServerPolicyRule', 'ruleId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}';
    const vars = {
      ['policyId']: String(policyId),
      ['authServerId']: String(authServerId),
      ['ruleId']: String(ruleId),
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
     * Retrieves a custom token claim
     * Retrieve a Custom Token Claim
     * @param authServerId
     * @param claimId
     */
  async getOAuth2Claim(authServerId, claimId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getOAuth2Claim', 'authServerId');
    }
    // verify required parameter 'claimId' is not null or undefined
    if (claimId === null || claimId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getOAuth2Claim', 'claimId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/claims/{claimId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['claimId']: String(claimId),
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
     * Retrieves a custom token scope
     * Retrieve a Custom Token Scope
     * @param authServerId
     * @param scopeId
     */
  async getOAuth2Scope(authServerId, scopeId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getOAuth2Scope', 'authServerId');
    }
    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getOAuth2Scope', 'scopeId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/scopes/{scopeId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['scopeId']: String(scopeId),
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
     * Retrieves a refresh token for a client
     * Retrieve a Refresh Token for a Client
     * @param authServerId
     * @param clientId
     * @param tokenId
     * @param expand
     */
  async getRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, expand, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getRefreshTokenForAuthorizationServerAndClient', 'authServerId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getRefreshTokenForAuthorizationServerAndClient', 'clientId');
    }
    // verify required parameter 'tokenId' is not null or undefined
    if (tokenId === null || tokenId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'getRefreshTokenForAuthorizationServerAndClient', 'tokenId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens/{tokenId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['clientId']: String(clientId),
      ['tokenId']: String(tokenId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', ''));
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
     * Lists all credential keys
     * List all Credential Keys
     * @param authServerId
     */
  async listAuthorizationServerKeys(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listAuthorizationServerKeys', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/credentials/keys';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Lists all policies
     * List all Policies
     * @param authServerId
     */
  async listAuthorizationServerPolicies(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listAuthorizationServerPolicies', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Lists all policy rules for the specified Custom Authorization Server and Policy
     * List all Policy Rules
     * @param policyId
     * @param authServerId
     */
  async listAuthorizationServerPolicyRules(policyId, authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listAuthorizationServerPolicyRules', 'policyId');
    }
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listAuthorizationServerPolicyRules', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules';
    const vars = {
      ['policyId']: String(policyId),
      ['authServerId']: String(authServerId),
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
     * Lists all authorization servers
     * List all Authorization Servers
     * @param q
     * @param limit
     * @param after
     */
  async listAuthorizationServers(q, limit, after, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const path = '/api/v1/authorizationServers';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (q !== undefined) {
      requestContext.setQueryParam('q', ObjectSerializer_1.ObjectSerializer.serialize(q, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
    }
    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam('after', ObjectSerializer_1.ObjectSerializer.serialize(after, 'string', ''));
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
     * Lists all custom token claims
     * List all Custom Token Claims
     * @param authServerId
     */
  async listOAuth2Claims(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listOAuth2Claims', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/claims';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Lists all clients
     * List all Clients
     * @param authServerId
     */
  async listOAuth2ClientsForAuthorizationServer(authServerId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listOAuth2ClientsForAuthorizationServer', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/clients';
    const vars = {
      ['authServerId']: String(authServerId),
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
     * Lists all custom token scopes
     * List all Custom Token Scopes
     * @param authServerId
     * @param q
     * @param filter
     * @param cursor
     * @param limit
     */
  async listOAuth2Scopes(authServerId, q, filter, cursor, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listOAuth2Scopes', 'authServerId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/scopes';
    const vars = {
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (q !== undefined) {
      requestContext.setQueryParam('q', ObjectSerializer_1.ObjectSerializer.serialize(q, 'string', ''));
    }
    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam('filter', ObjectSerializer_1.ObjectSerializer.serialize(filter, 'string', ''));
    }
    // Query Params
    if (cursor !== undefined) {
      requestContext.setQueryParam('cursor', ObjectSerializer_1.ObjectSerializer.serialize(cursor, 'string', ''));
    }
    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', 'int32'));
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
     * Lists all refresh tokens for a client
     * List all Refresh Tokens for a Client
     * @param authServerId
     * @param clientId
     * @param expand
     * @param after
     * @param limit
     */
  async listRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, expand, after, limit, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listRefreshTokensForAuthorizationServerAndClient', 'authServerId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'listRefreshTokensForAuthorizationServerAndClient', 'clientId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens';
    const vars = {
      ['authServerId']: String(authServerId),
      ['clientId']: String(clientId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.GET, vars);
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
     * Replaces an authorization server
     * Replace an Authorization Server
     * @param authServerId
     * @param authorizationServer
     */
  async replaceAuthorizationServer(authServerId, authorizationServer, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServer', 'authServerId');
    }
    // verify required parameter 'authorizationServer' is not null or undefined
    if (authorizationServer === null || authorizationServer === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServer', 'authorizationServer');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}';
    const vars = {
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], authorizationServer);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(authorizationServer, 'AuthorizationServer', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Replaces a policy
     * Replace a Policy
     * @param authServerId
     * @param policyId
     * @param policy
     */
  async replaceAuthorizationServerPolicy(authServerId, policyId, policy, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicy', 'authServerId');
    }
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicy', 'policyId');
    }
    // verify required parameter 'policy' is not null or undefined
    if (policy === null || policy === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicy', 'policy');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['policyId']: String(policyId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], policy);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(policy, 'AuthorizationServerPolicy', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Replaces the configuration of the Policy Rule defined in the specified Custom Authorization Server and Policy
     * Replace a Policy Rule
     * @param policyId
     * @param authServerId
     * @param ruleId
     * @param policyRule
     */
  async replaceAuthorizationServerPolicyRule(policyId, authServerId, ruleId, policyRule, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicyRule', 'policyId');
    }
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicyRule', 'authServerId');
    }
    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicyRule', 'ruleId');
    }
    // verify required parameter 'policyRule' is not null or undefined
    if (policyRule === null || policyRule === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceAuthorizationServerPolicyRule', 'policyRule');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/policies/{policyId}/rules/{ruleId}';
    const vars = {
      ['policyId']: String(policyId),
      ['authServerId']: String(authServerId),
      ['ruleId']: String(ruleId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], policyRule);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(policyRule, 'AuthorizationServerPolicyRule', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Replaces a custom token claim
     * Replace a Custom Token Claim
     * @param authServerId
     * @param claimId
     * @param oAuth2Claim
     */
  async replaceOAuth2Claim(authServerId, claimId, oAuth2Claim, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceOAuth2Claim', 'authServerId');
    }
    // verify required parameter 'claimId' is not null or undefined
    if (claimId === null || claimId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceOAuth2Claim', 'claimId');
    }
    // verify required parameter 'oAuth2Claim' is not null or undefined
    if (oAuth2Claim === null || oAuth2Claim === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceOAuth2Claim', 'oAuth2Claim');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/claims/{claimId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['claimId']: String(claimId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], oAuth2Claim);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuth2Claim, 'OAuth2Claim', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Replaces a custom token scope
     * Replace a Custom Token Scope
     * @param authServerId
     * @param scopeId
     * @param oAuth2Scope
     */
  async replaceOAuth2Scope(authServerId, scopeId, oAuth2Scope, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceOAuth2Scope', 'authServerId');
    }
    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceOAuth2Scope', 'scopeId');
    }
    // verify required parameter 'oAuth2Scope' is not null or undefined
    if (oAuth2Scope === null || oAuth2Scope === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'replaceOAuth2Scope', 'oAuth2Scope');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/scopes/{scopeId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['scopeId']: String(scopeId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.PUT, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], oAuth2Scope);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuth2Scope, 'OAuth2Scope', ''), contentType);
    requestContext.setBody(serializedBody);
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
     * Revokes a refresh token for a client
     * Revoke a Refresh Token for a Client
     * @param authServerId
     * @param clientId
     * @param tokenId
     */
  async revokeRefreshTokenForAuthorizationServerAndClient(authServerId, clientId, tokenId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'revokeRefreshTokenForAuthorizationServerAndClient', 'authServerId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'revokeRefreshTokenForAuthorizationServerAndClient', 'clientId');
    }
    // verify required parameter 'tokenId' is not null or undefined
    if (tokenId === null || tokenId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'revokeRefreshTokenForAuthorizationServerAndClient', 'tokenId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens/{tokenId}';
    const vars = {
      ['authServerId']: String(authServerId),
      ['clientId']: String(clientId),
      ['tokenId']: String(tokenId),
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
     * Revokes all refresh tokens for a client
     * Revoke all Refresh Tokens for a Client
     * @param authServerId
     * @param clientId
     */
  async revokeRefreshTokensForAuthorizationServerAndClient(authServerId, clientId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'revokeRefreshTokensForAuthorizationServerAndClient', 'authServerId');
    }
    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'revokeRefreshTokensForAuthorizationServerAndClient', 'clientId');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/clients/{clientId}/tokens';
    const vars = {
      ['authServerId']: String(authServerId),
      ['clientId']: String(clientId),
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
     * Rotates all credential keys
     * Rotate all Credential Keys
     * @param authServerId
     * @param use
     */
  async rotateAuthorizationServerKeys(authServerId, use, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'authServerId' is not null or undefined
    if (authServerId === null || authServerId === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'rotateAuthorizationServerKeys', 'authServerId');
    }
    // verify required parameter 'use' is not null or undefined
    if (use === null || use === undefined) {
      throw new baseapi_1.RequiredError('AuthorizationServerApi', 'rotateAuthorizationServerKeys', 'use');
    }
    // Path Params
    const path = '/api/v1/authorizationServers/{authServerId}/credentials/lifecycle/keyRotate';
    const vars = {
      ['authServerId']: String(authServerId),
    };
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(path, http_1.HttpMethodEnum.POST, vars);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const [contentType, contentEncoding] = ObjectSerializer_1.ObjectSerializer.getPreferredMediaTypeAndEncoding([
      'application/json'
    ], use);
    requestContext.setHeaderParam('Content-Type', contentType);
    requestContext.setHeaderParam('Content-Transfer-Encoding', contentEncoding);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(use, 'JwkUse', ''), contentType);
    requestContext.setBody(serializedBody);
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
exports.AuthorizationServerApiRequestFactory = AuthorizationServerApiRequestFactory;
class AuthorizationServerApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateAuthorizationServer(response) {
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
     * @params response Response returned by the server for a request to activateAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateAuthorizationServerPolicy(response) {
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
     * @params response Response returned by the server for a request to activateAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateAuthorizationServerPolicyRule(response) {
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
     * @params response Response returned by the server for a request to createAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createAuthorizationServer(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServer', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServer', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createAuthorizationServerPolicy(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicy', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicy', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createAuthorizationServerPolicyRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicyRule', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicyRule', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createOAuth2Claim(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Claim', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Claim', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createOAuth2Scope(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Scope', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Scope', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateAuthorizationServer(response) {
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
     * @params response Response returned by the server for a request to deactivateAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateAuthorizationServerPolicy(response) {
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
     * @params response Response returned by the server for a request to deactivateAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateAuthorizationServerPolicyRule(response) {
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
     * @params response Response returned by the server for a request to deleteAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteAuthorizationServer(response) {
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
     * @params response Response returned by the server for a request to deleteAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteAuthorizationServerPolicy(response) {
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
     * @params response Response returned by the server for a request to deleteAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteAuthorizationServerPolicyRule(response) {
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
     * @params response Response returned by the server for a request to deleteOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteOAuth2Claim(response) {
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
     * @params response Response returned by the server for a request to deleteOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteOAuth2Scope(response) {
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
     * @params response Response returned by the server for a request to getAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getAuthorizationServer(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServer', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServer', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getAuthorizationServerPolicy(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicy', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicy', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getAuthorizationServerPolicyRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicyRule', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicyRule', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getOAuth2Claim(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Claim', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Claim', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getOAuth2Scope(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Scope', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Scope', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRefreshTokenForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getRefreshTokenForAuthorizationServerAndClient(response) {
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
     * @params response Response returned by the server for a request to listAuthorizationServerKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAuthorizationServerKeys(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<JsonWebKey>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<JsonWebKey>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServerPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAuthorizationServerPolicies(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AuthorizationServerPolicy>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AuthorizationServerPolicy>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServerPolicyRules
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAuthorizationServerPolicyRules(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AuthorizationServerPolicyRule>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AuthorizationServerPolicyRule>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthorizationServers
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listAuthorizationServers(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AuthorizationServer>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<AuthorizationServer>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2Claims
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listOAuth2Claims(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2Claim>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2Claim>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ClientsForAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listOAuth2ClientsForAuthorizationServer(response) {
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
     * @params response Response returned by the server for a request to listOAuth2Scopes
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listOAuth2Scopes(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2Scope>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<OAuth2Scope>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRefreshTokensForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listRefreshTokensForAuthorizationServerAndClient(response) {
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
     * @params response Response returned by the server for a request to replaceAuthorizationServer
     * @throws ApiException if the response code was not in [200, 299]
     */
  async replaceAuthorizationServer(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServer', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServer', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAuthorizationServerPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
  async replaceAuthorizationServerPolicy(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicy', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicy', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAuthorizationServerPolicyRule
     * @throws ApiException if the response code was not in [200, 299]
     */
  async replaceAuthorizationServerPolicyRule(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicyRule', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'AuthorizationServerPolicyRule', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOAuth2Claim
     * @throws ApiException if the response code was not in [200, 299]
     */
  async replaceOAuth2Claim(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Claim', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Claim', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceOAuth2Scope
     * @throws ApiException if the response code was not in [200, 299]
     */
  async replaceOAuth2Scope(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Scope', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'OAuth2Scope', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeRefreshTokenForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeRefreshTokenForAuthorizationServerAndClient(response) {
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
     * @params response Response returned by the server for a request to revokeRefreshTokensForAuthorizationServerAndClient
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeRefreshTokensForAuthorizationServerAndClient(response) {
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
     * @params response Response returned by the server for a request to rotateAuthorizationServerKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  async rotateAuthorizationServerKeys(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<JsonWebKey>', '');
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
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<JsonWebKey>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.AuthorizationServerApiResponseProcessor = AuthorizationServerApiResponseProcessor;
