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

import RequestOptions from './request-options';
import ModelFactory from './model-factory';
import ModelResolutionFactory from './resolution-factory';
import Client from './client';
import Resource from './resource';

declare class Collection {
    constructor(client: Client, uri: string, factory: ModelFactory | ModelResolutionFactory, request?: RequestOptions);
    nextUri: string;
    client: Client;
    factory: ModelFactory | ModelResolutionFactory;
    currentItems: Record<string, unknown>[];
    request: RequestOptions;
    next(): Promise<{
      done: boolean,
      value: Resource | null
    }>;
    [Symbol.asyncIterator](): {
        next: () => Promise<{
            done: boolean,
            value: Resource | null
          }>;
    };
    getNextPage(): Promise<Record<string, unknown>>;
    each(iterator: (item: Resource) => void | Promise<unknown> | boolean): Promise<unknown>;
    subscribe(config: {
        interval: number;
        next: (item: Resource) => void | Promise<unknown>;
        error: (e: Error) => Promise<unknown>;
        complete: () => void;
    }): {
        unsubscribe(): void;
    };
}

export default Collection;
