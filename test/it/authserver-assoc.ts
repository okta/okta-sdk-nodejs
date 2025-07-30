import { expect } from 'chai';
import {
  AuthorizationServer,
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.authorizationServers.read',
    'okta.authorizationServers.manage'
  ]
});

describe('AuthorizationServerAssocApi', () => {
  let defaultAuthServer: AuthorizationServer;
  let authServer: AuthorizationServer;

  before(async () => {
    // get default authorization server
    const authServerCollection = await client.authorizationServerApi.listAuthorizationServers();
    await authServerCollection.each(as => {
      if (as.name === 'default') {
        defaultAuthServer = as;
        return false;
      }
    });

    // create authorization server
    authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
  });

  after(async () => {
    if (authServer) {
      await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
      await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
    }
  });

  it('Create and delete associated server', async () => {
    // add trusted server
    let authServersCollection = await client.authorizationServerApi.createAssociatedServers({
      authServerId: authServer.id,
      associatedServerMediated: {
        trusted: [
          defaultAuthServer.id
        ]
      }
    });
    let authServers: AuthorizationServer[] = [];
    await authServersCollection.each(as => authServers.push(as));
    expect(authServers.length).to.equal(1);
    expect(authServers[0].id).to.equal(defaultAuthServer.id);

    // remove trusted server
    await client.authorizationServerApi.deleteAssociatedServer({
      authServerId: authServer.id,
      associatedServerId: defaultAuthServer.id,
    });

    // get trusted
    authServersCollection = await client.authorizationServerApi.listAssociatedServersByTrustedType({
      authServerId: authServer.id,
      trusted: true
    });
    authServers = [];
    await authServersCollection.each(as => authServers.push(as));
    expect(authServers.length).to.equal(0);

    // get untrusted
    authServersCollection = await client.authorizationServerApi.listAssociatedServersByTrustedType({
      authServerId: authServer.id,
      trusted: false
    });
    authServers = [];
    await authServersCollection.each(as => authServers.push(as));
    expect(authServers.length).to.be.greaterThanOrEqual(1);
  });
});
