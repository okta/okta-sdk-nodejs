import { expect } from 'chai';
import { spy } from 'sinon';
import {
  AuthorizationServer,
  ApiClient,
  DefaultRequestExecutor
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import faker = require('@faker-js/faker');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-crud`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Crud API', () => {
  describe('Create Auth Server', () => {
    let authServer: AuthorizationServer;
    afterEach(async () => {
      await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
      await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
    });

    it('should return correct model', async () => {
      const mockAuthorizationServer = getMockAuthorizationServer();
      authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: mockAuthorizationServer});
      expect(authServer).to.be.instanceOf(AuthorizationServer);
      expect(authServer.id).to.be.exist;
      expect(authServer.name).to.be.equal(mockAuthorizationServer.name);
    });
  });

  describe('List Authorization Servers', () => {
    let createdServers = [];
    before(async () => {
      createdServers = [];
      const namePrefixes = [
        'AUTH_SRV_AB',
        'AUTH_SRV_XY',
      ];
      for (const prefix of namePrefixes) {
        for (let i = 0 ; i < 2 ; i++) {
          const newServer = {
            ...getMockAuthorizationServer(),
            name: `node-sdk: ${prefix} ${i} ${faker.random.word()}`.substring(0, 49)
          };
          const createdServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: newServer});
          createdServers.push(createdServer);
        }
      }
      return createdServers;
    });
    after(async () => {
      for (const authServer of createdServers) {
        await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
        await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
      }
    });

    it('should search with q and paginate results', async () => {
      const queryParameters = {
        q: 'node-sdk: AUTH_SRV_AB',
        limit: 1
      };
      const filtered = new Set();
      const collection = await client.authorizationServerApi.listAuthorizationServers({...queryParameters});
      const pageSpy = spy(collection, 'getNextPage');
      await collection.each(as => {
        expect(as).to.be.an.instanceof(AuthorizationServer);
        expect(as.name).to.match(new RegExp(queryParameters.q));
        expect(filtered.has(as.name)).to.be.false;
        filtered.add(as.name);
      });
      expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(2);
      expect(filtered.size).to.equal(2);
    });
  });

  describe('Get Authorization Server', () => {
    let authServer: AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
    });

    afterEach(async () => {
      await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
      await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
    });

    it('should get Authorization Server by id', async () => {
      const authServerFromGet = await client.authorizationServerApi.getAuthorizationServer({authServerId: authServer.id});
      expect(authServerFromGet).to.be.instanceOf(AuthorizationServer);
      expect(authServerFromGet.name).to.equal(authServer.name);
    });
  });

  describe('Update Authorization Server', () => {
    let authServer: AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
    });
    afterEach(async () => {
      await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
      await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
    });

    it('should update name for created auth server', async () => {
      const mockName = 'Mock update auth server';
      authServer.name = mockName;
      const updatedAuthServer = await client.authorizationServerApi.replaceAuthorizationServer({authServerId: authServer.id, authorizationServer: authServer});
      expect(updatedAuthServer.id).to.equal(authServer.id);
      expect(updatedAuthServer.name).to.equal(mockName);
    });
  });

  describe('Delete Authorization Server', () => {
    let authServer: AuthorizationServer;
    beforeEach(async () => {
      authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
    });

    it('should not get authserver after deletion', async () => {
      await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
      const res = await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
      expect(res).to.equal(undefined);
      try {
        await client.authorizationServerApi.getAuthorizationServer({authServerId: authServer.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
