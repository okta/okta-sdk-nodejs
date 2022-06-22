import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import mockScope = require('./mocks/scope.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-scope`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Scope API', () => {
  let authServer: v3.AuthorizationServer;
  before(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  after(async () => {
    await client.deactivateAuthorizationServer(authServer.id);
    await client.deleteAuthorizationServer(authServer.id);
  });

  describe('List all scopes', () => {
    let scope: v3.OAuth2Scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope as v3.OAuth2Scope);
    });
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
    });

    it('should return a collection of scopes', async () => {
      const collection = await client.listOAuth2Scopes(authServer.id);
      expect(collection).to.be.instanceOf(Collection);
      const scopes = [];
      await collection.each(s => scopes.push(s));
      expect(scopes).is.not.empty;
      const scopeFindByName = scopes.find(s => s.name === mockScope.name);
      expect(scopeFindByName).to.be.exist;
      expect(scopeFindByName).to.be.instanceOf(v3.OAuth2Scope);
    });
  });

  describe('Create a scope', () => {
    let scope: v3.OAuth2Scope;
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
    });

    it('should get scope from auth server with created scope id', async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope as v3.OAuth2Scope);
      expect(scope).to.be.exist;
      expect(scope.name).to.equal(mockScope.name);
    });
  });

  describe('Get a scope', () => {
    let scope: v3.OAuth2Scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope as v3.OAuth2Scope);
    });
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
    });

    it('should get scope from auth server by id', async () => {
      const scopeFromGet = await client.getOAuth2Scope(authServer.id, scope.id);
      expect(scopeFromGet).to.be.instanceOf(v3.OAuth2Scope);
      expect(scopeFromGet.id).to.equal(scope.id);
    });
  });

  describe('Update scope', () => {
    let scope: v3.OAuth2Scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope as v3.OAuth2Scope);
    });
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
    });

    it('should update desciption for created scope', async () => {
      const mockDescription = 'Mock update scope';
      scope.description = mockDescription;
      const updatedScope = await client.updateOAuth2Scope(authServer.id, scope.id, scope);
      expect(updatedScope.id).to.equal(scope.id);
      expect(updatedScope.description).to.equal(mockDescription);
    });
  });

  describe('Delete scope', () => {
    let scope: v3.OAuth2Scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope as v3.OAuth2Scope);
    });

    it('should not get scope after deletion', async () => {
      const res = await client.deleteOAuth2Scope(authServer.id, scope.id);
      expect(res).to.equal(undefined);
      try {
        await client.getOAuth2Scope(authServer.id, scope.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
