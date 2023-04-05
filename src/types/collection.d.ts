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

import { RequestOptions } from './request-options';
import { ModelFactory } from './model-factory';
import { ModelResolutionFactory } from './resolution-factory';
import { HttpLibrary } from './generated/http/http';
import { RequestContext, ResponseContext } from './generated/http/http';

interface ResponseProcessor {
  parseResponse: (resource: ResponseContext) => Promise<unknown>;
}

export declare class Collection<T> {
  constructor(
    httpApi: HttpLibrary,
    uri: string,
    factory?: ModelFactory | ModelResolutionFactory | ResponseProcessor,
    request?: RequestOptions | RequestContext
  );

  nextUri: string;
  httpApi: HttpLibrary;
  factory: ModelFactory | ModelResolutionFactory | ResponseProcessor;
  currentItems: Record<string, unknown>[];
  request: RequestOptions;
  next(): Promise<{
    done: boolean;
    value: T | null;
  }>;
  [Symbol.asyncIterator](): {
    next: () => Promise<{
      done: boolean;
      value: T | null;
    }>;
  };
  getNextPage(): Promise<Record<string, unknown>[]>;
  each(iterator: (item: T) => Promise<unknown> | boolean | unknown): Promise<unknown>;
  subscribe(config: {
    interval?: number;
    next: (item: T) => unknown | Promise<unknown>;
    error: (e: Error) => unknown | Promise<unknown>;
    complete: () => void;
  }): {
    unsubscribe(): void;
  };
}
