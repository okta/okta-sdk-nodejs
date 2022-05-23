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


import { RequestContext, HttpMethodEnum as HttpMethod } from './http/http';
export interface BaseServerConfiguration {
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export declare class ServerConfiguration<T extends {
    [key: string]: string;
}> implements BaseServerConfiguration {
  private url;
  private variableConfiguration;
  constructor(url: string, variableConfiguration: T);
  /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
  setVariables(variableConfiguration: Partial<T>): void;
  getConfiguration(): T;
  private getUrl;
  /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
  makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
export declare const server1: ServerConfiguration<{
    subdomain: string;
    domain: 'okta.com' | 'oktapreview.com' | 'okta-emea.com';
}>;
export declare const server2: ServerConfiguration<{
    customDomain: string;
}>;
export declare const servers: (ServerConfiguration<{
    subdomain: string;
    domain: 'okta.com' | 'oktapreview.com' | 'okta-emea.com';
}> | ServerConfiguration<{
    customDomain: string;
}>)[];
