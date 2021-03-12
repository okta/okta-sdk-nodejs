/*!
 * Copyright (c) 2017-2021, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import OAuth from "./oauth";
import { Response } from 'node-fetch';
import MemoryStore from './memory-store';
import RequestExecutor from './request-executor';
import { defaultCacheMiddlewareFunctionType } from './default-cache-middleware';
import RequestOptions from "./request-options";

declare interface RequestContext {
  isCollection?: boolean,
  resources?: string[],
}

declare class Http {
    static errorFilter(response: Response): Promise<Response>;
    constructor(httpConfig: {
        requestExecutor: RequestExecutor,
        cacheStore?: MemoryStore | unknown,
        cacheMiddleware?: defaultCacheMiddlewareFunctionType | unknown,
        oauth: OAuth,
    });
    defaultHeaders: Record<string, unknown>;
    requestExecutor: RequestExecutor;
    cacheStore: MemoryStore | unknown;
    cacheMiddleware: defaultCacheMiddlewareFunctionType | unknown;
    oauth: OAuth;
    prepareRequest(request: RequestOptions): Promise<RequestOptions>;
    http(uri: string, request?: RequestOptions, context?: {
        isCollection: boolean,
        resources: string[],
    }): Promise<Response>;
    delete(uri: string, request?: RequestOptions, context?: {
        isCollection: boolean,
        resources: string[],
    }): Promise<Response>;
    json(uri: string, request?: RequestOptions, context?: RequestContext): Promise<Record<string, unknown>>;
    getJson(uri: string, request?: RequestOptions, context?: RequestContext): Promise<Record<string, unknown>>;
    post(uri: string, request?: RequestOptions, context?: RequestContext): Promise<Response>;
    postJson(uri: string, request?: RequestOptions, context?: RequestContext): Promise<Response>;
    putJson(uri: string, request?: RequestOptions, context?: RequestContext): Promise<Response>;
    put(uri: string, request?: RequestOptions, context?: RequestContext): Promise<Response>;
}

export default Http;

