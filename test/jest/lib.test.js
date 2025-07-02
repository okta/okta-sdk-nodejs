const lib = require('../../src');
const ApiClient = require('../../src/client');
const RequestExecutor = require('../../src/request-executor');
const { DefaultRequestExecutor } = require('../../src/default-request-executor');

describe('library export', () => {
  it('should export the ApiClient', () => {
    expect(lib.ApiClient).toEqual(ApiClient);
  });
  it('should export the base request executor class', () => {
    expect(lib.RequestExecutor).toEqual(RequestExecutor);
  });
  it('should export the default request executor class', () => {
    expect(lib.DefaultRequestExecutor).toEqual(DefaultRequestExecutor);
  });
});
