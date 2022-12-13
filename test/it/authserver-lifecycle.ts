import { expect } from 'chai';
import {
  AuthorizationServer,
  Client,
  DefaultRequestExecutor
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-lifecycle`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Lifecycle API', () => {
  let authServer: AuthorizationServer;
  beforeEach(async () => {
    authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
    expect(authServer?.id).to.not.be.undefined;
  });
  afterEach(async () => {
    await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
    await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
  });

  it('should activate auth server', async () => {
    const res = await client.authorizationServerApi.activateAuthorizationServer({authServerId: authServer.id});
    expect(res).to.equal(undefined);
    const authServerFromGet = await client.authorizationServerApi.getAuthorizationServer({authServerId: authServer.id});
    expect(authServerFromGet.status).to.equal('ACTIVE');
  });

  it('should deactive auth server', async () => {
    const res = await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
    expect(res).to.equal(undefined);
    const authServerFromGet = await client.authorizationServerApi.getAuthorizationServer({authServerId: authServer.id});
    expect(authServerFromGet.status).to.equal('INACTIVE');
  });
});
