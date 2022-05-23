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
exports.IdentityProviderApiResponseProcessor = exports.IdentityProviderApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
/**
 * no description
 */
class IdentityProviderApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  /**
     * Activates an inactive IdP.
     * Activate Identity Provider
     * @param idpId
     */
  async activateIdentityProvider(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'activateIdentityProvider', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/lifecycle/activate'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Clones a X.509 certificate for an IdP signing key credential from a source IdP to target IdP
     * Clone Signing Key Credential for IdP
     * @param idpId
     * @param keyId
     * @param targetIdpId
     */
  async cloneIdentityProviderKey(idpId, keyId, targetIdpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'cloneIdentityProviderKey', 'idpId');
    }
    // verify required parameter 'keyId' is not null or undefined
    if (keyId === null || keyId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'cloneIdentityProviderKey', 'keyId');
    }
    // verify required parameter 'targetIdpId' is not null or undefined
    if (targetIdpId === null || targetIdpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'cloneIdentityProviderKey', 'targetIdpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/keys/{keyId}/clone'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'keyId' + '}', encodeURIComponent(String(keyId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (targetIdpId !== undefined) {
      requestContext.setQueryParam('targetIdpId', ObjectSerializer_1.ObjectSerializer.serialize(targetIdpId, 'string', ''));
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
     * Adds a new IdP to your organization.
     * Add Identity Provider
     * @param identityProvider
     */
  async createIdentityProvider(identityProvider, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'identityProvider' is not null or undefined
    if (identityProvider === null || identityProvider === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'createIdentityProvider', 'identityProvider');
    }
    // Path Params
    const localVarPath = '/api/v1/idps';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(identityProvider, 'IdentityProvider', ''), contentType);
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
     * Adds a new X.509 certificate credential to the IdP key store.
     * Add X.509 Certificate Public Key for Identity Providers
     * @param jsonWebKey
     */
  async createIdentityProviderKey(jsonWebKey, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'jsonWebKey' is not null or undefined
    if (jsonWebKey === null || jsonWebKey === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'createIdentityProviderKey', 'jsonWebKey');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/credentials/keys';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(jsonWebKey, 'JsonWebKey', ''), contentType);
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
     * Deactivates an active IdP.
     * Deactivate Identity Provider
     * @param idpId
     */
  async deactivateIdentityProvider(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'deactivateIdentityProvider', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/lifecycle/deactivate'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Removes an IdP from your organization.
     * Delete Identity Provider
     * @param idpId
     */
  async deleteIdentityProvider(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'deleteIdentityProvider', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Deletes a specific IdP Key Credential by `kid` if it is not currently being used by an Active or Inactive IdP.
     * Delete Key
     * @param keyId
     */
  async deleteIdentityProviderKey(keyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'keyId' is not null or undefined
    if (keyId === null || keyId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'deleteIdentityProviderKey', 'keyId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/credentials/keys/{keyId}'
      .replace('{' + 'keyId' + '}', encodeURIComponent(String(keyId)));
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
     * Generates a new key pair and returns a Certificate Signing Request for it.
     * Generate Certificate Signing Request for IdP
     * @param idpId
     * @param metadata
     */
  async generateCsrForIdentityProvider(idpId, metadata, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'generateCsrForIdentityProvider', 'idpId');
    }
    // verify required parameter 'metadata' is not null or undefined
    if (metadata === null || metadata === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'generateCsrForIdentityProvider', 'metadata');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/csrs'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(metadata, 'CsrMetadata', ''), contentType);
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
     * Generates a new X.509 certificate for an IdP signing key credential to be used for signing assertions sent to the IdP
     * Generate New IdP Signing Key Credential
     * @param idpId
     * @param validityYears expiry of the IdP Key Credential
     */
  async generateIdentityProviderSigningKey(idpId, validityYears, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'generateIdentityProviderSigningKey', 'idpId');
    }
    // verify required parameter 'validityYears' is not null or undefined
    if (validityYears === null || validityYears === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'generateIdentityProviderSigningKey', 'validityYears');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/keys/generate'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (validityYears !== undefined) {
      requestContext.setQueryParam('validityYears', ObjectSerializer_1.ObjectSerializer.serialize(validityYears, 'number', 'int32'));
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
     * Gets a specific Certificate Signing Request model by id
     * Get Csr for Identity Provider
     * @param idpId
     * @param csrId
     */
  async getCsrForIdentityProvider(idpId, csrId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getCsrForIdentityProvider', 'idpId');
    }
    // verify required parameter 'csrId' is not null or undefined
    if (csrId === null || csrId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getCsrForIdentityProvider', 'csrId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/csrs/{csrId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'csrId' + '}', encodeURIComponent(String(csrId)));
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
     * Fetches an IdP by `id`.
     * Get Identity Provider
     * @param idpId
     */
  async getIdentityProvider(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getIdentityProvider', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Fetches a linked IdP user by ID
     * Get Identity Provider Application User
     * @param idpId
     * @param userId
     */
  async getIdentityProviderApplicationUser(idpId, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getIdentityProviderApplicationUser', 'idpId');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getIdentityProviderApplicationUser', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/users/{userId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
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
     * Gets a specific IdP Key Credential by `kid`
     * Get Identity Provider Key
     * @param keyId
     */
  async getIdentityProviderKey(keyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'keyId' is not null or undefined
    if (keyId === null || keyId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getIdentityProviderKey', 'keyId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/credentials/keys/{keyId}'
      .replace('{' + 'keyId' + '}', encodeURIComponent(String(keyId)));
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
     * Gets a specific IdP Key Credential by `kid`
     * Get Signing Key Credential for IdP
     * @param idpId
     * @param keyId
     */
  async getIdentityProviderSigningKey(idpId, keyId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getIdentityProviderSigningKey', 'idpId');
    }
    // verify required parameter 'keyId' is not null or undefined
    if (keyId === null || keyId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'getIdentityProviderSigningKey', 'keyId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/keys/{keyId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'keyId' + '}', encodeURIComponent(String(keyId)));
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
     * Links an Okta user to an existing Social Identity Provider. This does not support the SAML2 Identity Provider Type
     * Link a user to a Social IdP without a transaction
     * @param idpId
     * @param userId
     * @param userIdentityProviderLinkRequest
     */
  async linkUserToIdentityProvider(idpId, userId, userIdentityProviderLinkRequest, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'linkUserToIdentityProvider', 'idpId');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'linkUserToIdentityProvider', 'userId');
    }
    // verify required parameter 'userIdentityProviderLinkRequest' is not null or undefined
    if (userIdentityProviderLinkRequest === null || userIdentityProviderLinkRequest === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'linkUserToIdentityProvider', 'userIdentityProviderLinkRequest');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/users/{userId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(userIdentityProviderLinkRequest, 'UserIdentityProviderLinkRequest', ''), contentType);
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
     * Enumerates Certificate Signing Requests for an IdP
     * List Certificate Signing Requests for IdP
     * @param idpId
     */
  async listCsrsForIdentityProvider(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'listCsrsForIdentityProvider', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/csrs'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Find all the users linked to an identity provider
     * Find Users
     * @param idpId
     */
  async listIdentityProviderApplicationUsers(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'listIdentityProviderApplicationUsers', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/users'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Enumerates IdP key credentials.
     * List Identity Provider Keys
     * @param after Specifies the pagination cursor for the next page of keys
     * @param limit Specifies the number of key results in a page
     */
  async listIdentityProviderKeys(after, limit, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/idps/credentials/keys';
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
     * Enumerates signing key credentials for an IdP
     * List Signing Key Credentials for IdP
     * @param idpId
     */
  async listIdentityProviderSigningKeys(idpId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'listIdentityProviderSigningKeys', 'idpId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/keys'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
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
     * Enumerates IdPs in your organization with pagination. A subset of IdPs can be returned that match a supported filter expression or query.
     * List Identity Providers
     * @param q Searches the name property of IdPs for matching value
     * @param after Specifies the pagination cursor for the next page of IdPs
     * @param limit Specifies the number of IdP results in a page
     * @param type Filters IdPs by type
     */
  async listIdentityProviders(q, after, limit, type, _options) {
    let _config = _options || this.configuration;
    // Path Params
    const localVarPath = '/api/v1/idps';
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Query Params
    if (q !== undefined) {
      requestContext.setQueryParam('q', ObjectSerializer_1.ObjectSerializer.serialize(q, 'string', ''));
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
    if (type !== undefined) {
      requestContext.setQueryParam('type', ObjectSerializer_1.ObjectSerializer.serialize(type, 'string', ''));
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
     * Fetches the tokens minted by the Social Authentication Provider when the user authenticates with Okta via Social Auth.
     * Social Authentication Token Operation
     * @param idpId
     * @param userId
     */
  async listSocialAuthTokens(idpId, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'listSocialAuthTokens', 'idpId');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'listSocialAuthTokens', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/users/{userId}/credentials/tokens'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
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
     * Update the Certificate Signing Request with a signed X.509 certificate and add it into the signing key credentials for the IdP.
     * Publish Csr for Identity Provider
     * @param idpId
     * @param csrId
     * @param body
     */
  async publishCsrForIdentityProvider(idpId, csrId, body, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'publishCsrForIdentityProvider', 'idpId');
    }
    // verify required parameter 'csrId' is not null or undefined
    if (csrId === null || csrId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'publishCsrForIdentityProvider', 'csrId');
    }
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'publishCsrForIdentityProvider', 'body');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/csrs/{csrId}/lifecycle/publish'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'csrId' + '}', encodeURIComponent(String(csrId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/octet-stream',
      'application/x-x509-ca-cert',
      'application/pkix-cert',
      'application/x-pem-file'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, 'HttpFile', ''), contentType);
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
     * Revoke a Certificate Signing Request and delete the key pair from the IdP
     * Revoke Csr for Identity Provider
     * @param idpId
     * @param csrId
     */
  async revokeCsrForIdentityProvider(idpId, csrId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'revokeCsrForIdentityProvider', 'idpId');
    }
    // verify required parameter 'csrId' is not null or undefined
    if (csrId === null || csrId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'revokeCsrForIdentityProvider', 'csrId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/credentials/csrs/{csrId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
      .replace('{' + 'csrId' + '}', encodeURIComponent(String(csrId)));
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
     * Removes the link between the Okta user and the IdP user.
     * Unlink User from IdP
     * @param idpId
     * @param userId
     */
  async unlinkUserFromIdentityProvider(idpId, userId, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'unlinkUserFromIdentityProvider', 'idpId');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'unlinkUserFromIdentityProvider', 'userId');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}/users/{userId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)))
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
     * Updates the configuration for an IdP.
     * Update Identity Provider
     * @param idpId
     * @param identityProvider
     */
  async updateIdentityProvider(idpId, identityProvider, _options) {
    let _config = _options || this.configuration;
    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'updateIdentityProvider', 'idpId');
    }
    // verify required parameter 'identityProvider' is not null or undefined
    if (identityProvider === null || identityProvider === undefined) {
      throw new baseapi_1.RequiredError('IdentityProviderApi', 'updateIdentityProvider', 'identityProvider');
    }
    // Path Params
    const localVarPath = '/api/v1/idps/{idpId}'
      .replace('{' + 'idpId' + '}', encodeURIComponent(String(idpId)));
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethodEnum.PUT);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
    // Body Params
    const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
      'application/json'
    ]);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(identityProvider, 'IdentityProvider', ''), contentType);
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
exports.IdentityProviderApiRequestFactory = IdentityProviderApiRequestFactory;
class IdentityProviderApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async activateIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  async cloneIdentityProviderKey(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  async createIdentityProviderKey(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deactivateIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteIdentityProvider(response) {
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
     * @params response Response returned by the server for a request to deleteIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  async deleteIdentityProviderKey(response) {
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
     * @params response Response returned by the server for a request to generateCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async generateCsrForIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Csr', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Csr', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  async generateIdentityProviderSigningKey(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getCsrForIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Csr', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Csr', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderApplicationUser
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getIdentityProviderApplicationUser(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProviderApplicationUser', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProviderApplicationUser', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getIdentityProviderKey(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderSigningKey
     * @throws ApiException if the response code was not in [200, 299]
     */
  async getIdentityProviderSigningKey(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to linkUserToIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async linkUserToIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProviderApplicationUser', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProviderApplicationUser', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCsrsForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listCsrsForIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Csr>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<Csr>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviderApplicationUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listIdentityProviderApplicationUsers(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentityProviderApplicationUser>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentityProviderApplicationUser>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviderKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listIdentityProviderKeys(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<JsonWebKey>', '');
      return body;
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
     * @params response Response returned by the server for a request to listIdentityProviderSigningKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listIdentityProviderSigningKeys(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<JsonWebKey>', '');
      return body;
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
     * @params response Response returned by the server for a request to listIdentityProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listIdentityProviders(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<IdentityProvider>', '');
      return body;
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
     * @params response Response returned by the server for a request to listSocialAuthTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
  async listSocialAuthTokens(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<SocialAuthToken>', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'Array<SocialAuthToken>', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async publishCsrForIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('201', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'JsonWebKey', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeCsrForIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async revokeCsrForIdentityProvider(response) {
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
     * @params response Response returned by the server for a request to unlinkUserFromIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async unlinkUserFromIdentityProvider(response) {
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
     * @params response Response returned by the server for a request to updateIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
  async updateIdentityProvider(response) {
    const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if ((0, util_1.isCodeInRange)('200', response.httpStatusCode)) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), 'IdentityProvider', '');
      return body;
    }
    throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!', await response.getBodyAsAny(), response.headers);
  }
}
exports.IdentityProviderApiResponseProcessor = IdentityProviderApiResponseProcessor;
