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


import { HttpLibrary } from './http/http';
import { Middleware, PromiseMiddleware } from './middleware';
import { BaseServerConfiguration } from './servers';
import { AuthMethods, AuthMethodsConfiguration } from './auth/auth';
export interface Configuration {
    readonly baseServer: BaseServerConfiguration;
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
}
/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
    /**
      * Default server to use
      */
    baseServer?: BaseServerConfiguration;
    /**
      * HTTP library to use e.g. IsomorphicFetch
      */
    httpApi?: HttpLibrary;
    /**
      * The middlewares which will be applied to requests and responses
      */
    middleware?: Middleware[];
    /**
      * Configures all middlewares using the promise api instead of observables (which Middleware uses)
      */
    promiseMiddleware?: PromiseMiddleware[];
    /**
      * Configuration for the available authentication methods
      */
    authMethods?: AuthMethodsConfiguration;
}
/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
export declare function createConfiguration(conf?: ConfigurationParameters): Configuration;
