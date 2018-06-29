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

  describe('getRetryDelayMs', () => {

    it('should return a retry delay that is one second longer than the value set in the X-Rate-Limit-Reset header', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const now = new Date();
      const retryAt = new Date(now.getTime() + (1000 * 60));// one minute in the future
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAt)),
          date: now.toGMTString()
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

    it('should defer to delayFetch if the request is not timed and not in a max-retry state', () => {
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
      requestExecutor.retryRequest = jest.fn();
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

    it('should return true if the request has timed out', () => {
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

  describe('retryRequest', () => {

    it('should build a new request and send it to fetch', async () => {
      const requestExecutor = new DefaultRequestExecutor();
      const now = new Date();
      const retryAfter = new Date(now.getTime() + (1000 * 60)); // one minute in the future
      const mockRequest = { method: 'GET' };
      const mockNewRequest = {};
      requestExecutor.fetch = jest.fn();
      requestExecutor.getRetryDelayMs = jest.fn().mockImplementation(() => 1);
      requestExecutor.buildRetryRequest = jest.fn().mockImplementation(() => mockNewRequest);
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAfter)),
          date: String(requestExecutor.dateToEpochSeconds(now))
        }
      });
      await requestExecutor.retryRequest(mockRequest, mockResponse);
      expect(requestExecutor.fetch.mock.calls[0][0]).toBe(mockNewRequest);
    });

    it('should emit backoff and resume events', async () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = { method: 'GET' };
      let backoffCalled = false;
      let resumeCalled = false;
      requestExecutor.fetch = jest.fn();
      requestExecutor.on('backoff', () => {
        backoffCalled = true;
      });
      requestExecutor.on('resume', () => {
        resumeCalled = true;
      });
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : 'foo',
          date: String(requestExecutor.dateToEpochSeconds(new Date()))
        }
      });
      await requestExecutor.retryRequest(mockRequest, mockResponse);
      expect(backoffCalled).toBe(true);
      expect(resumeCalled).toBe(true);
    });
  });
});
