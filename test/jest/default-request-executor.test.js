const RequestExecutor = require('../../src/request-executor');
const DefaultRequestExecutor = require('../../src/default-request-executor');

function buildMockResponse(response) {
  response = response || {};
  response.headers = response.headers || {};
  Object.assign(response.headers, {
    get: (header) => {
      return response.headers[header];
    }
  });
  return response;
}

function dateToEpochSeconds(date) {
  return Math.floor(date.getTime() / 1000);
}

jest.unmock('isomorphic-fetch');

describe('DefaultRequestExecutor', () => {

  describe('constructor', () => {

    it('should set the default requestTimeout to 0', () => {
      expect(new DefaultRequestExecutor().requestTimeout).toBe(0);
    });

    it('should set the default maxRetries to 2', () => {
      expect(new DefaultRequestExecutor().maxRetries).toBe(2);
    });

    it('should throw if requestTimeout is less than 0', () => {
      expect(() => new DefaultRequestExecutor({ requestTimeout: -1}))
      .toThrow('okta.client.rateLimit.requestTimeout provided as -1 but must be 0 (disabled) or greater than zero');
    });

    it('should throw if maxRetries is less than 0', () => {
      expect(() => new DefaultRequestExecutor({ maxRetries: -1}))
      .toThrow('okta.client.rateLimit.maxRetries provided as -1 but must be 0 (disabled) or greater than zero');
    });
  });

  describe('buildRetryRequest', () => {

    it('should set the X-Okta-Retry-For and X-Okta-Retry-Count headers', () => {
      const mockRequest = {
        method: 'GET',
        headers: {}
      };
      const mockResponse = buildMockResponse({
        headers: {
          'x-okta-request-id' : 'foo'
        }
      });
      const requestExecutor = new DefaultRequestExecutor();
      const newRequest = requestExecutor.buildRetryRequest(mockRequest, mockResponse);
      expect(newRequest.headers[requestExecutor.retryForHeader]).toBe('foo');
      expect(newRequest.headers[requestExecutor.retryCountHeader]).toBe(1);
      expect(mockRequest.headers[requestExecutor.retryCountHeader]).toBeUndefined();
    });

    it('should not overwrite X-Okta-Retry-For with new request IDs', () => {
      const mockRequest = {
        method: 'GET',
        headers: {
          'X-Okta-Retry-For' : 'first'
        }
      };
      const mockResponse = buildMockResponse({
        headers: {
          'x-okta-request-id' : 'second'
        }
      });
      const requestExecutor = new DefaultRequestExecutor();
      const newRequest = requestExecutor.buildRetryRequest(mockRequest, mockResponse);
      expect(newRequest.headers[requestExecutor.retryForHeader]).toBe('first');
    });

    it('should increment the X-Okta-Retry-Count header', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const request = {
        method: 'GET',
        headers: {}
      };
      const mockResponse = buildMockResponse({
        headers: {
          'x-okta-request-id' : 'foo'
        }
      });
      request.headers[requestExecutor.retryCountHeader] = 1;
      const newRequest = requestExecutor.buildRetryRequest(request, mockResponse);
      expect(newRequest.headers[requestExecutor.retryCountHeader]).toBe(2);
    });

    it('should set request.timeout to the remaining time before requestTimeout is reached', async () => {
      const requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 10000
      });
      const mockRequest = {
        method: 'GET',
        headers: {},
        startTime: new Date(Date.now() - 1000)
      };
      const retryAt = new Date(Date.now() + 5000);
      const mockResponse = buildMockResponse({
        headers: {
          'x-okta-request-id' : 'foo',
          'x-rate-limit-reset': String(dateToEpochSeconds(retryAt)),
          date: new Date().toUTCString()
        }
      });
      const delayMs = requestExecutor.getRetryDelayMs(mockResponse);
      const newRequest = requestExecutor.buildRetryRequest(mockRequest, mockResponse, delayMs);
      // Should be 3 seconds, not 4, because we always add 1s to the retry time provided in the response headers
      expect(newRequest.timeout).toBeGreaterThan(2998);
      expect(newRequest.timeout).toBeLessThan(3002);
    });

  });

  describe('validateRetryResponseHeaders', () => {

    it('should return true if X-Rate-Limit-Reset exists', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset': String(new Date())
        }
      });
      expect(requestExecutor.validateRetryResponseHeaders(mockResponse)).toBe(true);
    });

    it('should return false if X-Rate-Limit-Reset is absent', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockResponse = buildMockResponse();
      expect(requestExecutor.validateRetryResponseHeaders(mockResponse)).toBe(false);
    });

    it('should return false if X-Rate-Limit-Reset exists twice ', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset': [String(new Date()), String(new Date())].join(',')
        }
      });
      expect(requestExecutor.validateRetryResponseHeaders(mockResponse)).toBe(false);
    });
  });

  describe('fetch', () => {
    const fetchProto = RequestExecutor.prototype.fetch;

    afterEach(() => {
      RequestExecutor.prototype.fetch = fetchProto; // restore original function
    });

    it('should add a startTime property to the request', () => {
      RequestExecutor.prototype.fetch = jest.fn().mockResolvedValue({ status: 200});
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = {
        method: 'GET',
        headers: {}
      };
      requestExecutor.fetch(mockRequest);
      expect(mockRequest.startTime).toBeInstanceOf(Date);
    });

    it('should not modify an existing startTime property on a request ', () => {
      RequestExecutor.prototype.fetch = jest.fn().mockResolvedValue({ status: 200});
      const requestExecutor = new DefaultRequestExecutor();
      const startTime = new Date();
      const mockRequest = {
        method: 'GET',
        headers: {},
        startTime
      };
      requestExecutor.fetch(mockRequest);
      expect(mockRequest.startTime).toBe(startTime);
    });

    it('delegates the request to RequestExecutor.fetch() and the response to this.parseResponse()', async () => {
      const request = { url: '/foo' };
      const response = { status: 200 };
      RequestExecutor.prototype.fetch = jest.fn().mockResolvedValue(response);
      const requestExecutor = new DefaultRequestExecutor();
      requestExecutor.parseResponse = jest.fn();
      await requestExecutor.fetch(request);
      expect(RequestExecutor.prototype.fetch.mock.calls[0][0]).toBe(request);
      expect(requestExecutor.parseResponse.mock.calls[0][0]).toBe(request);
      expect(requestExecutor.parseResponse.mock.calls[0][1]).toBe(response);
    });

    it('rejects if RequestExecutor.fetch() rejects', async () => {
      const err = new Error('http error');
      RequestExecutor.prototype.fetch = jest.fn().mockRejectedValue(err);
      const requestExecutor = new DefaultRequestExecutor();
      await expect(requestExecutor.fetch({})).rejects.toThrow(err);
    });

    it('rejects if the request times out', async () => {
      // mock such that fetch will not resolve, and the request should time out (error thrown by note-fetch):
      const requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 1
      });
      await expect(requestExecutor.fetch({url: 'https://www.okta.com'})).rejects
      .toMatchObject({message:'network timeout at: https://www.okta.com'});
    });

    it('sets the node-fetch timeout to requestTimeout for new requests', async () => {
      const mockParentFetch = jest.fn().mockResolvedValue({ status: 200 });
      RequestExecutor.prototype.fetch = mockParentFetch;
      const requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 100
      });
      await requestExecutor.fetch({ uri: '/foo '});
      expect(mockParentFetch.mock.calls[0][0].timeout).toBe(100);
    });
  });

  describe('getRetryDelayMs', () => {

    it('should return a retry delay that is one second longer than the value set in the X-Rate-Limit-Reset header', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const now = new Date();
      const retryAt = new Date(now.getTime() + (1000 * 60));// one minute in the future
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(dateToEpochSeconds(retryAt)),
          date: now.toUTCString()
        }
      });
      const delayMs = requestExecutor.getRetryDelayMs(mockResponse);
      const delayDate = new Date(now.getTime() + delayMs);
      expect(delayDate.getTime()).toBe(retryAt.getTime() + 1000);
    });
  });

  describe('parseResponse', () => {

    let requestExecutor;

    beforeEach(() => {
      requestExecutor = new DefaultRequestExecutor();
      requestExecutor.retryRequest = jest.fn();
    });

    it('should defer to retryRequest if the request is not timed out and not in a max-retry state', () => {
      const uri = '/foo';
      const request = { method: 'GET', uri };
      const mockResponse = buildMockResponse({
        status: 429,
        headers: {
          'x-rate-limit-reset': String(new Date())
        }
      });
      requestExecutor.parseResponse(request, mockResponse);
      expect(requestExecutor.retryRequest.mock.calls[0][0]).toBe(request);
      expect(requestExecutor.retryRequest.mock.calls[0][1]).toBe(mockResponse);
    });

    it('should reject if the request has timed out', async () => {
      // Rare case, but if node-fetch somehow resolves its promise before the request should be aborted we want to fail
      // Otherwise we will end up trying again when we shouldn't
      requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 1000
      });
      const startTime = new Date(new Date().getTime() - 2000);
      const request = { method: 'GET', startTime, uri: '/foo' };
      const mockResponse = buildMockResponse({
        status: 429,
        headers: {
          'x-rate-limit-reset': String(new Date())
        }
      });
      await expect(requestExecutor.parseResponse(request, mockResponse)).rejects.toThrow('HTTP request time exceeded okta.client.rateLimit.requestTimeout');
    });

    it('should reject if the the retry time is after the request timeout', async () => {
      requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 1000
      });
      const startTime = new Date(new Date().getTime() - 500);
      const request = { method: 'GET', startTime, uri: '/foo' };
      const mockResponse = buildMockResponse({
        status: 429,
        headers: {
          'x-rate-limit-reset' : String(dateToEpochSeconds(new Date(Date.now() + 2000))),
          date: new Date().toUTCString()
        }
      });
      await expect(requestExecutor.parseResponse(request, mockResponse)).rejects.toThrow('HTTP 429 retry delay would exceed okta.client.rateLimit.requestTimeout');
    });

    it('should return 429 responses if the max retries has been reached', async () => {
      const request = {
        method: 'GET',
        headers: {
          'X-Okta-Retry-Count': '2'
        },
      };
      const mockResponse = buildMockResponse({
        status: 429,
        headers: {
          'x-rate-limit-reset': String(new Date())
        }
      });
      const returnValue = await requestExecutor.parseResponse(request, mockResponse);
      expect(returnValue).toEqual(mockResponse);
    });

    it('should return 200 responses', async () => {
      const request = { method: 'GET' };
      const response = buildMockResponse({ status: 200 });
      const returnValue = await requestExecutor.parseResponse(request, response);
      expect(returnValue).toEqual(response);
    });

    it('should return 401 responses', async () => {
      const request = { method: 'GET' };
      const response = buildMockResponse({ status: 401 });
      const returnValue = await requestExecutor.parseResponse(request, response);
      expect(returnValue).toEqual(response);
    });

    it('should return 500 responses', async () => {
      const request = { method: 'GET' };
      const response = buildMockResponse({ status: 500 });
      const returnValue = await requestExecutor.parseResponse(request, response);
      expect(returnValue).toEqual(response);
    });
  });

  describe('maxRetriesReached', () => {

    it('should return true if maxRetries is greater than 0 and the retry limit is reached', () => {
      const requestExecutor = new DefaultRequestExecutor({
        maxRetries: 1
      });
      const mockRequest = {
        headers: {}
      };
      mockRequest.headers[requestExecutor.retryCountHeader] = '1';
      const result = requestExecutor.maxRetriesReached(mockRequest);
      expect(result).toBe(true);
    });

    it('should return false if maxRetries is zero', () => {
      const requestExecutor = new DefaultRequestExecutor({
        maxRetries: 0
      });
      const mockRequest = {
        headers: {}
      };
      mockRequest.headers[requestExecutor.retryCountHeader] = '2';
      const result = requestExecutor.maxRetriesReached(mockRequest);
      expect(result).toBe(false);
    });
  });

  describe('retryRequest', () => {

    it('should build a new request and send it to this.fetch', async () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = { method: 'GET' };
      requestExecutor.fetch = jest.fn();
      const now = new Date();
      const retryAfter = new Date(now.getTime() + 1000); // one second in the future
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(dateToEpochSeconds(retryAfter)),
          date: now.toUTCString()
        }
      });
      /*
        retryRequest will call buildRetryRequest to build the object that it
        sends to this.fetch(), so we use buildRetryRequest() to get an object
        that is similar to what we expect to be sent to fetch().  But we can't
        directly compare the startTime property, because it may differ between
        the two objects.
      */
      const expectedNewRequest = requestExecutor.buildRetryRequest(mockRequest, mockResponse);
      await requestExecutor.retryRequest(mockRequest, mockResponse);
      const actualNewRequest = requestExecutor.fetch.mock.calls[0][0];
      expect(expectedNewRequest).toEqual(actualNewRequest);
    });

    it('should reject if fetch rejects', async () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = { method: 'GET' };
      const now = new Date();
      const retryAfter = new Date(now.getTime() + 1000); // one second in the future
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(dateToEpochSeconds(retryAfter)),
          date: now.toUTCString()
        }
      });
      const err = new Error('http error');
      requestExecutor.fetch = jest.fn().mockRejectedValue(err);
      await expect(requestExecutor.retryRequest(mockRequest, mockResponse)).rejects.toThrow(err);
    });

    it('should emit backoff and resume events', async () => {
      const backoffHandler = jest.fn();
      const resumeHandler = jest.fn();
      const now = new Date();
      const mockRequestId = 'foo';
      const retryAfter = new Date(now.getTime() + 1000); // one second in the future
      const expectedRetryRequest = {
        headers: {
          'X-Okta-Retry-Count': 1,
          'X-Okta-Retry-For': mockRequestId
        },
        method: 'GET',
        timeout: 0
      };
      const mockRequest = { method: 'GET' };
      const mockResponse = buildMockResponse({
        status: 429,
        headers: {
          'x-rate-limit-reset' : String(dateToEpochSeconds(retryAfter)),
          date: now.toUTCString(),
          'x-okta-request-id': mockRequestId
        }
      });
      const requestExecutor = new DefaultRequestExecutor();
      requestExecutor.fetch = jest.fn().mockResolvedValue(mockResponse);
      requestExecutor.on('backoff', backoffHandler);
      requestExecutor.on('resume', resumeHandler);
      await requestExecutor.parseResponse(mockRequest, mockResponse);
      expect(backoffHandler).toHaveBeenCalledWith(
        mockRequest,
        mockResponse,
        mockRequestId,
        retryAfter - now + 1000
      );
      expect(resumeHandler).toHaveBeenCalledWith(
        expectedRetryRequest,
        mockRequestId
      );
    });
  });
});
