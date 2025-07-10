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


import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AuthenticatorBase } from '../models/AuthenticatorBase';
import { AuthenticatorMethodBase } from '../models/AuthenticatorMethodBase';
import { AuthenticatorMethodType } from '../models/AuthenticatorMethodType';
import { WellKnownAppAuthenticatorConfiguration } from '../models/WellKnownAppAuthenticatorConfiguration';
/**
 * no description
 */
export declare class AuthenticatorApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Activates an authenticator by `authenticatorId`
     * Activate an authenticator
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     */
  activateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Activates a method for an authenticator identified by `authenticatorId` and `methodType`
     * Activate an authenticator method
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     * @param methodType Type of authenticator method
     */
  activateAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Creates an authenticator
     * Create an authenticator
     * @param authenticator
     * @param activate Whether to execute the activation lifecycle operation when Okta creates the authenticator
     */
  createAuthenticator(authenticator: AuthenticatorBase, activate?: boolean, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates an authenticator by `authenticatorId`
     * Deactivate an authenticator
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     */
  deactivateAuthenticator(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Deactivates a method for an authenticator identified by `authenticatorId` and `methodType`
     * Deactivate an authenticator method
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     * @param methodType Type of authenticator method
     */
  deactivateAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves an authenticator from your Okta organization by `authenticatorId`
     * Retrieve an authenticator
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     */
  getAuthenticator(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves a method identified by `methodType` of an authenticator identified by `authenticatorId`
     * Retrieve an authenticator method
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     * @param methodType Type of authenticator method
     */
  getAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, _options?: Configuration): Promise<RequestContext>;
  /**
     * Retrieves the well-known app authenticator configuration. Includes an app authenticator\'s settings, supported methods, and other details.
     * Retrieve the well-known app authenticator configuration
     * @param oauthClientId Filters app authenticator configurations by &#x60;oauthClientId&#x60;
     */
  getWellKnownAppAuthenticatorConfiguration(oauthClientId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all methods of an authenticator identified by `authenticatorId`
     * List all methods of an authenticator
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     */
  listAuthenticatorMethods(authenticatorId: string, _options?: Configuration): Promise<RequestContext>;
  /**
     * Lists all authenticators
     * List all authenticators
     */
  listAuthenticators(_options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces the properties for an authenticator identified by `authenticatorId`
     * Replace an authenticator
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     * @param authenticator
     */
  replaceAuthenticator(authenticatorId: string, authenticator: AuthenticatorBase, _options?: Configuration): Promise<RequestContext>;
  /**
     * Replaces a method of `methodType` for an authenticator identified by `authenticatorId`
     * Replace an authenticator method
     * @param authenticatorId &#x60;id&#x60; of the authenticator
     * @param methodType Type of authenticator method
     * @param authenticatorMethodBase
     */
  replaceAuthenticatorMethod(authenticatorId: string, methodType: AuthenticatorMethodType, authenticatorMethodBase?: AuthenticatorMethodBase, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthenticatorApiResponseProcessor {
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAuthenticator(response: ResponseContext): Promise<AuthenticatorBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateAuthenticatorMethod
     * @throws ApiException if the response code was not in [200, 299]
     */
  activateAuthenticatorMethod(response: ResponseContext): Promise<AuthenticatorMethodBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  createAuthenticator(response: ResponseContext): Promise<AuthenticatorBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAuthenticator(response: ResponseContext): Promise<AuthenticatorBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deactivateAuthenticatorMethod
     * @throws ApiException if the response code was not in [200, 299]
     */
  deactivateAuthenticatorMethod(response: ResponseContext): Promise<AuthenticatorMethodBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthenticator(response: ResponseContext): Promise<AuthenticatorBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthenticatorMethod
     * @throws ApiException if the response code was not in [200, 299]
     */
  getAuthenticatorMethod(response: ResponseContext): Promise<AuthenticatorMethodBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWellKnownAppAuthenticatorConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
  getWellKnownAppAuthenticatorConfiguration(response: ResponseContext): Promise<Array<WellKnownAppAuthenticatorConfiguration>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthenticatorMethods
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthenticatorMethods(response: ResponseContext): Promise<Array<AuthenticatorMethodBase>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthenticators
     * @throws ApiException if the response code was not in [200, 299]
     */
  listAuthenticators(response: ResponseContext): Promise<Array<AuthenticatorBase>>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAuthenticator
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceAuthenticator(response: ResponseContext): Promise<AuthenticatorBase>;
  /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceAuthenticatorMethod
     * @throws ApiException if the response code was not in [200, 299]
     */
  replaceAuthenticatorMethod(response: ResponseContext): Promise<AuthenticatorMethodBase>;
}
