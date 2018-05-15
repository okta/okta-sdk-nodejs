const sinon = require('sinon');

const Http = require('../../src/http');

describe('HTTP class', () => {
  it('should allow me to provide my own fetch interface', async () => {
    const request = {
      method: 'get',
      headers: {
        foo: 'bar'
      }
    };
    const response = {
      status: 200
    };
    const fetch = sinon.stub().resolves(response);
    const uri = '/foo';
    const http = new Http({ fetch: fetch, cacheMiddleware: null});
    await http.http(uri, request);
    sinon.assert.calledWith(fetch, uri, request);
  });
});
