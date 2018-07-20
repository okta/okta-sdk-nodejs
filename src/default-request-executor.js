/*!
 * Copyright (c) 2018-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

const RequestExecutor = require('./request-executor');
const deepCopy = require('deep-copy');

class DefaultRequestExecutor extends RequestExecutor {
  constructor(config = {}) {
    super();

    if (config.maxRetries && config.maxRetries < 0) {
      throw new Error(`okta.client.rateLimit.maxRetries provided as ${config.maxRetries} but must be 0 (disabled) or greater than zero`);
    }

    if (config.requestTimeout && config.requestTimeout < 0) {
      throw new Error(`okta.client.rateLimit.requestTimeout provided as ${config.requestTimeout} but must be 0 (disabled) or greater than zero`);
    }

    this.requestTimeout = config.requestTimeout || 0;
    this.maxRetries = config.maxRetries === undefined ? 2 : config.maxRetries;
    this.retryCountHeader = 'X-Okta-Retry-Count';
    this.retryForHeader = 'X-Okta-Retry-For';
  }

  buildRetryRequest(request, requestId, delayMs) {
    const elapsedMs = Date.now() - request.startTime;
    const newRequest = deepCopy(request);
    newRequest.timeout = this.requestTimeout > 0 ? this.requestTimeout - elapsedMs - delayMs : 0;
    if (!newRequest.headers) {
      newRequest.headers = {};
    }
    if (!newRequest.headers[this.retryForHeader]) {
      newRequest.headers[this.retryForHeader] = requestId;
    }
    newRequest.headers[this.retryCountHeader] =
      newRequest.headers[this.retryCountHeader] ?
      newRequest.headers[this.retryCountHeader] + 1 : 1;
    return newRequest;
  }

  validateRetryResponseHeaders(response) {
    // Validate that we don't have duplicate headers, see OKTA-112507
    // Duplicate headers are returned by fetch as a comma separated list.
    const retryHeader = this.getRateLimitReset(response);
    return !!(retryHeader && !retryHeader.includes(','));
  }

  fetch(request) {
    if (!request.startTime) {
      request.startTime = new Date();
      request.timeout = this.requestTimeout;
    }

    return super.fetch(request).then(this.parseResponse.bind(this, request));
  }

  getOktaRequestId(response) {
    return response.headers.get('x-okta-request-id');
  }

  getRateLimitReset(response) {
    return response.headers.get('x-rate-limit-reset');
  }

  getResponseDate(response) {
    return response.headers.get('date');
  }

  getRetryDelayMs(response) {
    // Determine wait time by getting the delta X-Rate-Limit-Reset and the Date header
    // Add 1 second to account for sub second differences between the clocks that create these headers
    const nowDate = new Date(this.getResponseDate(response));
    const retryDate = new Date(parseInt(this.getRateLimitReset(response), 10) * 1000);
    return retryDate.getTime() - nowDate.getTime() + 1000;
  }

  parseResponse(request, response) {
    if (response.status === 429 && this.validateRetryResponseHeaders(response) && !(this.maxRetriesReached(request))) {
      const elapsedMs = Date.now() - request.startTime;
      const delayMs = this.getRetryDelayMs(response);
      const delayDelta = elapsedMs + delayMs;
      if (this.requestTimeout > 0) {
        if (elapsedMs >= this.requestTimeout) {
          return Promise.reject(new Error('HTTP request time exceeded okta.client.rateLimit.requestTimeout'));
        }
        if (delayDelta >= this.requestTimeout) {
          return Promise.reject(new Error('HTTP 429 retry delay would exceed okta.client.rateLimit.requestTimeout'));
        }
      }
      return this.retryRequest(request, response, delayMs);
    }
    return response;
  }

  maxRetriesReached(request) {
    if (this.maxRetries === 0) {
      return false;
    }
    const retryCount = request.headers && request.headers[this.retryCountHeader];
    return retryCount && parseInt(retryCount, 10) >= this.maxRetries;
  }

  retryRequest(request, response, delayMs) {
    const requestId = this.getOktaRequestId(response);
    return new Promise(resolve => {
      this.emit('backoff', request, response, requestId, delayMs);
      setTimeout(resolve, delayMs);
    }).then(() => {
      const newRequest = this.buildRetryRequest(request, requestId, delayMs);
      this.emit('resume', newRequest, requestId);
      return this.fetch(newRequest);
    });
  }
}

module.exports = DefaultRequestExecutor;
