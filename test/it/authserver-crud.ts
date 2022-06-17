import { expect } from 'chai';
import {
  v3,
  Client,
  Collection,
  DefaultRequestExecutor
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Crud API', () => {
  describe('Create Auth Server', () => {
    let authServer: v3.AuthorizationServer;
    afterEach(async () => {
      await client.deactivateAuthorizationServer(authServer.id);
      await client.deleteAuthorizationServer(authServer.id);
    });

    it('should return correct model', async () => {
      const mockAuthorizationServer = getMockAuthorizationServer();
      authServer = await client.createAuthorizationServer(mockAuthorizationServer);
      expect(authServer).to.be.instanceOf(v3.AuthorizationServer);
      expect(authServer.id).to.be.exist;
      expect(authServer.name).to.be.equal(mockAuthorizationServer.name);
    });
  });

  describe('List Authorization Server', () => {
    let authServer: v3.AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
    });
    afterEach(async () => {
      await client.deactivateAuthorizationServer(authServer.id);
      await client.deleteAuthorizationServer(authServer.id);
    });

    it('should return a collection of AuthorizationServer', async () => {
      const collection = await client.listAuthorizationServers();
      expect(collection).to.be.instanceOf(Collection);
      const authServers = await collection.getNextPage();
      expect(authServers).to.be.an('array').that.is.not.empty;
      const authServerFromCollection = authServers.find(as => as.name === authServer.name);
      expect(authServerFromCollection).to.be.exist;
    });
  });

  describe('Get Authorization Server', () => {
    let authServer: v3.AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
    });

    afterEach(async () => {
      await client.deactivateAuthorizationServer(authServer.id);
      await client.deleteAuthorizationServer(authServer.id);
    });

    it('should get Authorization Server by id', async () => {
      const authServerFromGet = await client.getAuthorizationServer(authServer.id);
      expect(authServerFromGet).to.be.instanceOf(v3.AuthorizationServer);
      expect(authServerFromGet.name).to.equal(authServer.name);
    });
  });

  describe('Update Authorization Server', () => {
    let authServer: v3.AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
    });
    afterEach(async () => {
      await client.deactivateAuthorizationServer(authServer.id);
      await client.deleteAuthorizationServer(authServer.id);
    });

    it('should update name for created auth server', async () => {
      const mockName = 'Mock update auth server';
      authServer.name = mockName;
      const updatedAuthServer = await client.updateAuthorizationServer(authServer.id, authServer);
      expect(updatedAuthServer.id).to.equal(authServer.id);
      expect(updatedAuthServer.name).to.equal(mockName);
    });
  });

  describe('Delete Authorization Server', () => {
    let authServer: v3.AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
    });

    it('should not get authserver after deletion', async () => {
      await client.deactivateAuthorizationServer(authServer.id);
      const res = await client.deleteAuthorizationServer(authServer.id);
      expect(res).to.equal(undefined);
      try {
        await client.getAuthorizationServer(authServer.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
