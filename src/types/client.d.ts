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

import { ParameterizedOperationsClient } from './parameterized-operations-client';
import { OAuth } from './oauth';
import { Http } from './http';
import { RequestExecutor } from './request-executor';
import { defaultCacheMiddleware } from './default-cache-middleware';
import { CacheStorage } from './memory-store';


export declare class Client extends ParameterizedOperationsClient {
  constructor(config?: {
    orgUrl?: string,
    token?: string,
    clientId?: string,
    scopes?: string[],
    requestExecutor?: RequestExecutor,
    authorizationMode?: string,
    privateKey?: string | Record<string, unknown>
    keyId?: string;
    cacheStore?: CacheStorage,
    cacheMiddleware?: typeof defaultCacheMiddleware | unknown
    defaultCacheMiddlewareResponseBufferSize?: number,
    userAgent?: string,
    httpsProxy?: string | unknown, // https://github.com/TooTallNate/node-agent-base/issues/56
  });

  requestExecutor: RequestExecutor;
  authorizationMode: string;
  baseUrl: string;
  apiToken: string;
  clientId: string;
  scopes: string[];
  privateKey: string;
  keyId: string;
  oauth: OAuth;
  http: Http;
}
