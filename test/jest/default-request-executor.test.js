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

    it('should set the start time if not defined', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = {
        method: 'GET',
        headers: {}
      };
      const mockResponse = buildMockResponse({
        headers: {
          'x-okta-request-id' : 'foo'
        }
      });
      const newRequest = requestExecutor.buildRetryRequest(mockRequest, mockResponse);
      expect(newRequest.startTime).toBeInstanceOf(Date);
    });

    it('should not modify the start time if defined', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const startTime = new Date();
      const mockRequest = {
        method: 'GET',
        headers: {},
        startTime
      };
      const mockResponse = buildMockResponse({
        headers: {
          'x-okta-request-id' : 'foo'
        }
      });
      const newRequest = requestExecutor.buildRetryRequest(mockRequest, mockResponse);
      expect(newRequest.startTime).toEqual(startTime);
    });
  });

  describe('canRetryRequest', () => {

    it('should return true if X-Rate-Limit-Reset exists', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset': String(new Date())
        }
      });
      expect(requestExecutor.canRetryRequest(mockResponse)).toBe(true);
    });

    it('should return false if X-Rate-Limit-Reset is absent', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockResponse = buildMockResponse();
      expect(requestExecutor.canRetryRequest(mockResponse)).toBe(false);
    });

    it('should return false if X-Rate-Limit-Reset exists twice ', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset': [String(new Date()), String(new Date())].join(',')
        }
      });
      expect(requestExecutor.canRetryRequest(mockResponse)).toBe(false);
    });
  });

  describe('fetch', () => {
    const fetchProto = RequestExecutor.prototype.fetch;

    afterEach(() => {
      RequestExecutor.prototype.fetch = fetchProto; // restore original function
    });

    it('delegates the request to RequestExecutor.fetch() and the response to this.parseResponse()', async () => {
      const request = { url: '/foo' };
      const response = { status: 200 };
      RequestExecutor.prototype.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));
      const requestExecutor = new DefaultRequestExecutor();
      requestExecutor.parseResponse = jest.fn();
      await requestExecutor.fetch(request);
      expect(RequestExecutor.prototype.fetch.mock.calls[0][0]).toBe(request);
      expect(requestExecutor.parseResponse.mock.calls[0][0]).toBe(request);
      expect(requestExecutor.parseResponse.mock.calls[0][1]).toBe(response);
    });

    it('rejects if RequestExecutor.fetch() rejects', async () => {
      const err = 'http error';
      let errored = false;
      RequestExecutor.prototype.fetch = jest.fn().mockImplementation(() => Promise.reject(err));
      const requestExecutor = new DefaultRequestExecutor();
      await requestExecutor.fetch({}).catch(e => {
        errored = true;
        expect(e).toBe(err);
      });
      expect(errored).toBe(true);
    });
  });

  describe('getRetryDelayMs', () => {

    it('should return a retry delay that is one second longer than the value set in the X-Rate-Limit-Reset header', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const now = new Date();
      const retryAt = new Date(now.getTime() + (1000 * 60));// one minute in the future
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAt)),
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

    it('should defer to retryRequest if the request is not timed and not in a max-retry state', () => {
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

    it('should return 429 responses if the request has timed out', async () => {
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
      const returnValue = await requestExecutor.parseResponse(request, mockResponse);
      expect(returnValue).toEqual(mockResponse);
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

  describe('requestHasTimedOut', () => {

    it('should return false if requestTimeout configuration is 0', () => {
      const requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 0
      });
      const mockRequest = {
        startTime: new Date(new Date().getTime() - 1000)
      };
      const result = requestExecutor.requestHasTimedOut(mockRequest);
      expect(result).toBe(false);
    });

    it('should return true if the request has taken longer than the configured requestTimeout', () => {
      const requestExecutor = new DefaultRequestExecutor({
        requestTimeout: 1000
      });
      const mockRequest = {
        startTime: new Date(new Date().getTime() - 2000)
      };
      const result = requestExecutor.requestHasTimedOut(mockRequest);
      expect(result).toBe(true);
    });
  });

  describe('maxRetriesReached', () => {

    it('should return true if maxRetries is greater than 0 and the retry limit is reached', () => {
      const requestExecutor = new DefaultRequestExecutor({
        maxRetries: 1
      });
      const mockRequest = {
        startTime: new Date(new Date().getTime() - 2000),
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
        startTime: new Date(new Date().getTime() - 2000),
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
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAfter)),
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
      expect(Math.abs(expectedNewRequest.startTime - actualNewRequest.startTime)).toBeLessThan(1000);
      delete expectedNewRequest.startTime;
      delete actualNewRequest.startTime;
      expect(expectedNewRequest).toEqual(actualNewRequest);
    });

    it('should reject if fetch rejects', async () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = { method: 'GET' };
      const now = new Date();
      const retryAfter = new Date(now.getTime() + 1000); // one second in the future
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAfter)),
          date: now.toUTCString()
        }
      });
      const err = 'http error';
      requestExecutor.fetch = jest.fn().mockImplementation(() => Promise.reject(err));
      let errored = false;
      await requestExecutor.retryRequest(mockRequest, mockResponse).catch(e => {
        errored = true;
        expect(e).toBe(err);
      });
      expect(errored).toBe(true);
    });

    it('should emit backoff and resume events', async () => {
      const now = new Date();
      const retryAfter = new Date(now.getTime() + 1000); // one second in the future
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = { method: 'GET' };
      let backoffCalled = false;
      let resumeCalled = false;
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAfter)),
          date: now.toUTCString(),
          'x-okta-request-id': 'foo'
        }
      });
      requestExecutor.fetch = jest.fn(() => Promise.resolve(mockResponse));
      requestExecutor.on('backoff', (request, response, requestId, delayMs) => {
        expect(request).toBe(mockRequest);
        expect(response).toBe(mockResponse);
        expect(requestId).toBe('foo');
        expect(delayMs).toBe(retryAfter - now + 1000);
        backoffCalled = true;
      });
      requestExecutor.on('resume', (newRequest, requestId) => {
        expect(newRequest.headers[requestExecutor.retryCountHeader]).toEqual(1);
        expect(newRequest.headers[requestExecutor.retryForHeader]).toEqual('foo');
        expect(requestId).toBe('foo');
        resumeCalled = true;
      });

      await requestExecutor.retryRequest(mockRequest, mockResponse);
      expect(backoffCalled).toBe(true);
      expect(resumeCalled).toBe(true);
    });
  });
});
