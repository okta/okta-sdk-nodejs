const okta = require('../../src');

describe('okta.Client', () => {
  it('should use the base RequestExecutor by default', () => {
    const client = new okta.Client();
    expect(client.requestExecutor).toBeInstanceOf(okta.RequestExecutor);
  });
  it('should let me pass an alternate request executor', () => {
    const client = new okta.Client({
      requestExecutor: new okta.DefaultRequestExecutor()
    });
    expect(client.requestExecutor).toBeInstanceOf(okta.DefaultRequestExecutor);
  });
});
