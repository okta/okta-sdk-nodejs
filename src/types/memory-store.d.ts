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

/** Interface methods required for cache storage implementations. */
export interface CacheStorage {
  get(key: string): Promise<string | undefined>;
  set(key: string, value: string, options?: Record<string, string | number>): Promise<string>;
  delete(key: string): Promise<void>;
}

export declare class MemoryStore implements CacheStorage {
  constructor(options?: {
    keyLimit?: number,
    expirationPoll?: number,
  });

  _keyLimit: number;
  _store: Map<string, unknown>;
  _interval: NodeJS.Timeout;
  get(key: string): Promise<string | undefined>;
  set(key: string, string: string, options?: {ttl: number }): Promise<string>;
  delete(key: string): Promise<void>;
}
