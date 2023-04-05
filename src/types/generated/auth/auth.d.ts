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


import { RequestContext } from '../http/http';
/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    getName(): string;
    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
/**
 * Applies apiKey authentication to the request context.
 */
export declare class ApiTokenAuthentication implements SecurityAuthentication {
  private apiKey;
  /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
  constructor(apiKey: string);
  getName(): string;
  applySecurityAuthentication(context: RequestContext): void;
}
/**
 * Applies oauth2 authentication to the request context.
 */
export declare class Oauth2Authentication implements SecurityAuthentication {
  private accessToken;
  /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
  constructor(accessToken: string);
  getName(): string;
  applySecurityAuthentication(context: RequestContext): void;
}
export declare type AuthMethods = {
    'default'?: SecurityAuthentication;
    'apiToken'?: SecurityAuthentication;
    'oauth2'?: SecurityAuthentication;
};
export declare type ApiKeyConfiguration = string;
export declare type HttpBasicConfiguration = {
    'username': string;
    'password': string;
};
export declare type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export declare type OAuth2Configuration = {
    accessToken: string;
};
export declare type AuthMethodsConfiguration = {
    'default'?: SecurityAuthentication;
    'apiToken'?: ApiKeyConfiguration;
    'oauth2'?: OAuth2Configuration;
};
/**
 * Creates the authentication methods from a swagger description.
 *
 */
export declare function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
