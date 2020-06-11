const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockAuthorizationServer = require('./mocks/authorization-server.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-crud`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe.skip('Authorization Server Crud API', () => {
  describe('Create Auth Server', () => {
    let authServer;
    afterEach(async () => {
      await authServer.delete();
    });

    it('should return correct model', async () => {
      authServer = await client.createAuthorizationServer(mockAuthorizationServer);
      expect(authServer).to.be.instanceOf(models.AuthorizationServer);
      expect(authServer.id).to.be.exist;
      expect(authServer.name).to.be.equal(mockAuthorizationServer.name);
    });
  });

  describe('List Authorization Server', () => {
    let authServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(mockAuthorizationServer);
    });
    afterEach(async () => {
      await authServer.delete();
    });

    it('should return a collection of AuthorizationServer', async () => {
      const collection = await client.listAuthorizationServers();
      expect(collection).to.be.instanceOf(Collection);
      const authServers = await collection.getNextPage();
      expect(authServers).to.be.an('array').that.is.not.empty;
      const authServerFromCollection = authServers.find(as => as.name === mockAuthorizationServer.name);
      expect(authServerFromCollection).to.be.exist;
    });
  });

  describe('Get Authorization Server', () => {
    let authServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(mockAuthorizationServer);
    });

    afterEach(async () => {
      await authServer.delete();
    });

    it('should get Authorization Server by id', async () => {
      const authServerFromGet = await client.getAuthorizationServer(authServer.id);
      expect(authServerFromGet).to.be.instanceOf(models.AuthorizationServer);
      expect(authServerFromGet.name).to.equal(mockAuthorizationServer.name);
    });
  });

  describe('Update Authorization Server', () => {
    let authServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(mockAuthorizationServer);
    });
    afterEach(async () => {
      await authServer.delete();
    });

    it('should update name for created auth server', async () => {
      const mockName = 'Mock update auth server';
      authServer.name = mockName;
      const updatedAuthServer = await authServer.update();
      expect(updatedAuthServer.id).to.equal(authServer.id);
      expect(updatedAuthServer.name).to.equal(mockName);
    });
  });

  describe('Delete Authorization Server', () => {
    let authServer;
    beforeEach(async () => {
      authServer = await client.createAuthorizationServer(mockAuthorizationServer);
    });

    it('should not get authserver after deletion', async () => {
      const res = await authServer.delete();
      expect(res.status).to.equal(204);
      try {
        await client.getAuthorizationServer(authServer.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
