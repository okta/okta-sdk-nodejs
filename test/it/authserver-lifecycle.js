const expect = require('chai').expect;
const okta = require('../../src');
const getMockAuthorizationServer = require('./mocks/authorization-server');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-lifecycle`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe.skip('Authorization Server Lifecycle API', () => {
  let authServer;
  beforeEach(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  afterEach(async () => {
    await authServer.delete();
  });

  it('should activate auth server', async () => {
    const res = await authServer.activate();
    expect(res.status).to.equal(204);
    const authServerFromGet = await client.getAuthorizationServer(authServer.id);
    expect(authServerFromGet.status).to.equal('ACTIVE');
  });

  it('should deactive auth server', async () => {
    const res = await authServer.deactivate();
    expect(res.status).to.equal(204);
    const authServerFromGet = await client.getAuthorizationServer(authServer.id);
    expect(authServerFromGet.status).to.equal('INACTIVE');
  });
});
