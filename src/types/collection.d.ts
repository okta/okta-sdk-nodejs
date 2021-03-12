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

import Request from './request';

declare class Collection {
    constructor(client: any, uri: string, factory: any, request?: Request);
    nextUri: string;
    client: any;
    factory: any;
    currentItems: any[];
    request: Request;
    next(): Promise<any>;
    [Symbol.asyncIterator](): {
        next: () => Promise<any>;
    };
    getNextPage(): any;
    each(iterator: Function): any;
    subscribe(config: {
        interval: number;
        next: Function;
        error: Function;
        complete: Function;
    }): {
        unsubscribe(): void;
    };
}

export default Collection;
