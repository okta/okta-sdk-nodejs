import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  OAuth2Scope } from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import scope = require('./mocks/scope.json');

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
  let authServer;
  const mockScope = {
    ...scope,
    consent: OAuth2Scope.ConsentEnum.Required
  };
  before(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  after(async () => {
    await client.deactivateAuthorizationServer(authServer.id);
    await client.deleteAuthorizationServer(authServer.id);
  });

  describe('List all scopes', () => {
    let scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope);
      // scope = await authServer.createOAuth2Scope(mockScope);
    });
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
      // await authServer.deleteOAuth2Scope(scope.id);
    });

    it('should return a collection of scopes', async () => {
      const collection = await authServer.listOAuth2Scopes();
      // expect(collection).not.to.equal(null);
      const scopes = [];
      await collection.forEach(s => scopes.push(s));
      expect(scopes).is.not.empty;
      const scopeFindByName = scopes.find(s => s.name === mockScope.name);
      expect(scopeFindByName).to.be.exist;
      expect(scopeFindByName).to.be.instanceOf(OAuth2Scope);
    });
  });

  describe('Create a scope', () => {
    let scope;
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
    });

    it('should get scope from auth server with created scope id', async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope);
      expect(scope).to.be.exist;
      expect(scope.name).to.equal(mockScope.name);
    });
  });

  describe('Get a scope', () => {
    let scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope);
    });
    afterEach(async () => {
      await client.deleteOAuth2Scope(authServer.id, scope.id);
    });

    it('should get scope from auth server by id', async () => {
      const scopeFromGet = await authServer.getOAuth2Scope(scope.id);
      expect(scopeFromGet).to.be.instanceOf(OAuth2Scope);
      expect(scopeFromGet.id).to.equal(scope.id);
    });
  });

  describe('Update scope', () => {
    let scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope);
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
    let scope;
    beforeEach(async () => {
      scope = await client.createOAuth2Scope(authServer.id, mockScope);
    });

    it('should not get scope after deletion', async () => {
      const res = await client.deleteOAuth2Scope(authServer.id, scope.id);

      expect(res.statusCode).to.equal(204);
      try {
        await client.getOAuth2Scope(authServer.id, scope.id);
      } catch (e) {
        expect(e.statusCode).to.equal(404);
      }
    });
  });
});
