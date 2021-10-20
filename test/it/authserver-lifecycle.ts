import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-lifecycle`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Authorization Server Lifecycle API', () => {
  let authServer;
  beforeEach(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  afterEach(async () => {
    await client.deactivateAuthorizationServer(authServer.id);
    await client.deleteAuthorizationServer(authServer.id);
  });

  it('should activate auth server', async () => {
    const res = await client.activateAuthorizationServer(authServer.id);
    expect(res.statusCode).to.equal(204);
    const authServerFromGet = await client.getAuthorizationServer(authServer.id);
    expect(authServerFromGet.status).to.equal('ACTIVE');
  });

  it('should deactive auth server', async () => {
    const res = await client.deactivateAuthorizationServer(authServer.id);
    expect(res.statusCode).to.equal(204);
    const authServerFromGet = await client.getAuthorizationServer(authServer.id);
    expect(authServerFromGet.status).to.equal('INACTIVE');
  });
});
