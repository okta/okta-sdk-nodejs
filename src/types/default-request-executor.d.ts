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

import { Response } from 'node-fetch';
import { RequestExecutor } from './request-executor';
import { RequestOptions } from './request-options';


export declare class DefaultRequestExecutor extends RequestExecutor {
  constructor(config?: {
    maxRetries: number,
    requestTimeout: number,
  });

  requestTimeout: number;
  maxRetries: number;
  retryCountHeader: string;
  retryForHeader: string;
  buildRetryRequest(request: RequestOptions, requestId: string, delayMs: number): RequestOptions;
  validateRetryResponseHeaders(response: Response): boolean;
  getOktaRequestId(response: Response): string;
  getRateLimitReset(response: Response): string;
  getResponseDate(response: Response): string;
  getRetryDelayMs(response: Response): number;
  parseResponse(request: RequestOptions, response: Response): Response | Promise<Response | Error>;
  maxRetriesReached(request: RequestOptions): boolean;
  retryRequest(request: RequestOptions, response: Response, delayMs: number): Promise<Response>;
}
