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


import { CacheStorage } from './memory-store.d';
import { defaultCacheMiddleware } from './default-cache-middleware';
import { RequestExecutor } from './request-executor';

export declare interface V2Configuration {
  orgUrl?: string,
  token?: string,
  clientId?: string,
  scopes?: string[],
  requestExecutor?: RequestExecutor,
  authorizationMode?: string,
  privateKey?: string | Record<string, unknown>,
  keyId?: string,
  cacheStore?: CacheStorage,
  cacheMiddleware?: typeof defaultCacheMiddleware | unknown,
  defaultCacheMiddlewareResponseBufferSize?: number,
}
