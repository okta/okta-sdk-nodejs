import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import models = require('../../src/models');
import Collection = require('../../src/collection');
import getMockAuthorizationServer = require('./mocks/authorization-server');
import mockScope = require('./mocks/scope.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-scope`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Authorization Server Scope API', () => {
  let authServer;
  before(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  after(async () => {
    await authServer.deactivate();
    await authServer.delete();
  });

  describe('List all scopes', () => {
    let scope;
    beforeEach(async () => {
      scope = await authServer.createOAuth2Scope(mockScope);
    });
    afterEach(async () => {
      await authServer.deleteOAuth2Scope(scope.id);
    });

    it('should return a collection of scopes', async () => {
      const collection = authServer.listOAuth2Scopes();
      expect(collection).to.be.instanceOf(Collection);
      const scopes = [];
      await collection.each(s => scopes.push(s));
      expect(scopes).is.not.empty;
      const scopeFindByName = scopes.find(s => s.name === mockScope.name);
      expect(scopeFindByName).to.be.exist;
      expect(scopeFindByName).to.be.instanceOf(models.OAuth2Scope);
    });
  });

  describe('Create a scope', () => {
    let scope;
    afterEach(async () => {
      await authServer.deleteOAuth2Scope(scope.id);
    });

    it('should get scope from auth server with created scope id', async () => {
      scope = await authServer.createOAuth2Scope(mockScope);
      expect(scope).to.be.exist;
      expect(scope.name).to.equal(mockScope.name);
    });
  });

  describe('Get a scope', () => {
    let scope;
    beforeEach(async () => {
      scope = await authServer.createOAuth2Scope(mockScope);
    });
    afterEach(async () => {
      await authServer.deleteOAuth2Scope(scope.id);
    });

    it('should get scope from auth server by id', async () => {
      const scopeFromGet = await authServer.getOAuth2Scope(scope.id);
      expect(scopeFromGet).to.be.instanceOf(models.OAuth2Scope);
      expect(scopeFromGet.id).to.equal(scope.id);
    });
  });

  describe('Update scope', () => {
    let scope;
    beforeEach(async () => {
      scope = await authServer.createOAuth2Scope(mockScope);
    });
    afterEach(async () => {
      await authServer.deleteOAuth2Scope(scope.id);
    });

    it('should update desciption for created scope', async () => {
      const mockDescription = 'Mock update scope';
      scope.description = mockDescription;
      const updatedScope = await authServer.updateOAuth2Scope(scope.id, scope);
      expect(updatedScope.id).to.equal(scope.id);
      expect(updatedScope.description).to.equal(mockDescription);
    });
  });

  describe('Delete scope', () => {
    let scope;
    beforeEach(async () => {
      scope = await authServer.createOAuth2Scope(mockScope);
    });

    it('should not get scope after deletion', async () => {
      const res = await authServer.deleteOAuth2Scope(scope.id);
      expect(res.status).to.equal(204);
      try {
        await authServer.getOAuth2Scope(scope.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
