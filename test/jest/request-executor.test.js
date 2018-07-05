const RequestExecutor = require('../../src/request-executor');
const isoFetch = require('isomorphic-fetch');

jest.mock('isomorphic-fetch');

describe('RequestExecutor', () => {

  describe('.fetch()', () => {

    it('should delegate requests to isomorphic-fetch as (url, request)', async () => {
      const requestExecutor = new RequestExecutor();
      const request = { url: '/foo' };
      await requestExecutor.fetch(request);
      expect(isoFetch.mock.calls[0][0]).toBe(request.url);
      expect(isoFetch.mock.calls[0][1]).toBe(request);
    });

    it('should emit request and response events', async () => {
      const requestExecutor = new RequestExecutor();
      let requestCalled = false;
      let responseCalled = false;
      const request = { url: '/foo' };
      requestExecutor.on('request', (passedRequest) => {
        expect(passedRequest).toBe(request);
        requestCalled = true;
      });
      requestExecutor.on('response', (passedResponse) => {
        expect(passedResponse).toEqual({status: 200}); // same type of response as defined in __mocks__/isomorphic-fetch.js
        responseCalled = true;
      });
      await requestExecutor.fetch(request);
      expect(requestCalled).toBe(true);
      expect(responseCalled).toBe(true);
    });
  });
});
