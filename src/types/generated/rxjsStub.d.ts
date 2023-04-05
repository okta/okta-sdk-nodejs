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


export declare class Observable<T> {
  private promise;
  constructor(promise: Promise<T>);
  toPromise(): Promise<T>;
  pipe<S>(callback: (value: T) => S | Promise<S>): Observable<S>;
}
export declare function from<_>(promise: Promise<any>): Observable<any>;
export declare function of<T>(value: T): Observable<T>;
export declare function mergeMap<T, S>(callback: (value: T) => Observable<S>): (value: T) => Promise<S>;
export declare function map(callback: any): any;
