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

    it('should set the default max elapsed to 60 seconds', () => {
      expect(new DefaultRequestExecutor().maxElapsedTime).toBe(60000);
    });

    it('should set the default rate limit retry offset minimum to 1 second', () => {
      expect(new DefaultRequestExecutor().rateLimitRandomOffsetMin).toBe(1000);
    });

    it('should set the default rate limit retry offset maximum to 5 seconds', () => {
      expect(new DefaultRequestExecutor().rateLimitRandomOffsetMax).toBe(5000);
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

    it('should return a retry delay that is within the configured bounds', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const now = new Date();
      const retryAfter = new Date(now.getTime() + (1000 * 60));// one minute in the future
      const retryBefore = new Date(retryAfter.getTime() + requestExecutor.rateLimitRandomOffsetMax);
      const mockResponse = buildMockResponse({
        headers: {
          'x-rate-limit-reset' : String(requestExecutor.dateToEpochSeconds(retryAfter)),
          date: now.toGMTString()
        }
      });
      let retries = 0;
      while (retries < 100) { // Try this a bunch of times because the offet is random
        const delayMs = requestExecutor.getRetryDelayMs(mockResponse);
        const delayDate = new Date(now.getTime() + delayMs);
        expect(delayDate.getTime()).toBeGreaterThan(retryAfter.getTime());
        expect(delayDate.getTime()).toBeLessThan(retryBefore.getTime());
        retries ++;
      }
    });
  });

  describe('parseResponse', () => {

    let requestExecutor;

    beforeEach(() => {
      requestExecutor = new DefaultRequestExecutor();
      requestExecutor.retryRequest = jest.fn();
    });

    it('should defer to delayFetch for retry-able 429 responses, within max elapsed time', () => {
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

    it('should return 429 responses if max elapsed has passed', async () => {
      const startTime = new Date(new Date().getTime() - 61 * 1000); // 61 seconds in the past
      const request = { method: 'GET', startTime };
      const response = buildMockResponse({ status: 429 });
      const returnValue = await requestExecutor.parseResponse(request, response);
      expect(returnValue).toEqual(response);
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

  describe('requestIsMaxElapsed', () => {

    it('should return true if the time is within max elapsed', () => {
      const requestExecutor = new DefaultRequestExecutor();
      const mockRequest = {
        startTime: new Date()
      };
      const result = requestExecutor.requestIsMaxElapsed(mockRequest);
      expect(result).toBe(false);
    });

    it('should return false if the time is outside max elapsed', () => {
      const requestExecutor = new DefaultRequestExecutor({
        maxElapsedTime: 1000
      });
      const mockRequest = {
        startTime: new Date(new Date().getTime() - 2000)
      };
      const result = requestExecutor.requestIsMaxElapsed(mockRequest);
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
