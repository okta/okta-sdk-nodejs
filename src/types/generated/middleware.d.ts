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


import { RequestContext, ResponseContext } from './http/http';
import { Observable } from './rxjsStub';
/**
 * Defines the contract for a middleware intercepting requests before
 * they are sent (but after the RequestContext was created)
 * and before the ResponseContext is unwrapped.
 *
 */
export interface Middleware {
    /**
     * Modifies the request before the request is sent.
     *
     * @param context RequestContext of a request which is about to be sent to the server
     * @returns an observable of the updated request context
     *
     */
    pre(context: RequestContext): Observable<RequestContext>;
    /**
     * Modifies the returned response before it is deserialized.
     *
     * @param context ResponseContext of a sent request
     * @returns an observable of the modified response context
     */
    post(context: ResponseContext): Observable<ResponseContext>;
}
export declare class PromiseMiddlewareWrapper implements Middleware {
  private middleware;
  constructor(middleware: PromiseMiddleware);
  pre(context: RequestContext): Observable<RequestContext>;
  post(context: ResponseContext): Observable<ResponseContext>;
}
/**
 * Defines the contract for a middleware intercepting requests before
 * they are sent (but after the RequestContext was created)
 * and before the ResponseContext is unwrapped.
 *
 */
export interface PromiseMiddleware {
    /**
     * Modifies the request before the request is sent.
     *
     * @param context RequestContext of a request which is about to be sent to the server
     * @returns an observable of the updated request context
     *
     */
    pre(context: RequestContext): Promise<RequestContext>;
    /**
 * Modifies the returned response before it is deserialized.
 *
 * @param context ResponseContext of a sent request
 * @returns an observable of the modified response context
 */
    post(context: ResponseContext): Promise<ResponseContext>;
}
