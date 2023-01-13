import { expect } from 'chai';
import { spy } from 'sinon';
import {
  AuthorizationServer,
  Client,
  Collection,
  DefaultRequestExecutor,
  OAuth2Scope,
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import mockScope = require('./mocks/scope.json');
import faker = require('@faker-js/faker');
import utils = require('../utils');

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
  let authServer: AuthorizationServer;
  before(async () => {
    authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
  });
  after(async () => {
    await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
    await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
  });

  describe('List all scopes', () => {
    let scope: OAuth2Scope;
    beforeEach(async () => {
      scope = await client.authorizationServerApi.createOAuth2Scope({
        authServerId: authServer.id,
        oAuth2Scope: mockScope as OAuth2Scope
      });
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
    });

    it('should return a collection of scopes', async () => {
      const collection = await client.authorizationServerApi.listOAuth2Scopes({authServerId: authServer.id});
      expect(collection).to.be.instanceOf(Collection);
      const scopes: OAuth2Scope[] = [];
      await collection.each(s => scopes.push(s));
      expect(scopes).is.not.empty;
      const scopeFindByName = scopes.find(s => s.name === mockScope.name);
      expect(scopeFindByName).to.be.exist;
      expect(scopeFindByName).to.be.instanceOf(OAuth2Scope);
    });
  });

  describe('Filter scopes', () => {
    let scopes: Array<OAuth2Scope>;
    before(async () => {
      scopes = [];
      const namePrefixes = [
        'nodesdk1',
        'nodesdk2',
      ];
      for (const prefix of namePrefixes) {
        for (let i = 0 ; i < 2 ; i++) {
          const suf = faker.random.word();
          const mockScope: OAuth2Scope = {
            name: `${prefix}:${suf}`,
            description: suf,
            consent: 'REQUIRED'
          };
          const scope = await client.authorizationServerApi.createOAuth2Scope({
            authServerId: authServer.id,
            oAuth2Scope: mockScope
          });
          scopes.push(scope);
        }
      }
    });
    after(async () => {
      for (const scope of scopes) {
        await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
      }
    });

    // Pagination does not work
    xit('should paginate results', async () => {
      const filtered = new Set();
      const collection = await client.authorizationServerApi.listOAuth2Scopes({authServerId: authServer.id,
        limit: 2
      });
      const pageSpy = spy(collection, 'getNextPage');
      await collection.each(scope => {
        expect(scope).to.be.an.instanceof(OAuth2Scope);
        expect(filtered.has(scope.name)).to.be.false;
        filtered.add(scope.name);
      });
      expect(filtered.size).to.be.greaterThanOrEqual(4);
      expect(pageSpy.getCalls().length).to.equal(2);
    });

    // `filter` does not work? Not documented.
    it('should search with q', async () => {
      const queryParameters = {
        q: 'nodesdk1'
      };
      const filtered = new Set();
      await (await client.authorizationServerApi.listOAuth2Scopes({authServerId: authServer.id, ...queryParameters})).each(scope => {
        expect(scope).to.be.an.instanceof(OAuth2Scope);
        expect(scope.name).to.match(new RegExp(queryParameters.q));
        expect(filtered.has(scope.name)).to.be.false;
        filtered.add(scope.name);
      });
      expect(filtered.size).to.equal(2);
    });
  });

  describe('Create a scope', () => {
    let scope: OAuth2Scope;
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
    });

    it('should get scope from auth server with created scope id', async () => {
      scope = await client.authorizationServerApi.createOAuth2Scope({
        authServerId: authServer.id,
        oAuth2Scope: mockScope as OAuth2Scope
      });
      expect(scope).to.be.exist;
      expect(scope.name).to.equal(mockScope.name);
    });
  });

  describe('Get a scope', () => {
    let scope: OAuth2Scope;
    beforeEach(async () => {
      scope = await client.authorizationServerApi.createOAuth2Scope({
        authServerId: authServer.id,
        oAuth2Scope: mockScope as OAuth2Scope
      });
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
    });

    it('should get scope from auth server by id', async () => {
      const scopeFromGet = await client.authorizationServerApi.getOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
      expect(scopeFromGet).to.be.instanceOf(OAuth2Scope);
      expect(scopeFromGet.id).to.equal(scope.id);
    });
  });

  describe('Update scope', () => {
    let scope: OAuth2Scope;
    beforeEach(async () => {
      scope = await client.authorizationServerApi.createOAuth2Scope({
        authServerId: authServer.id,
        oAuth2Scope: mockScope as OAuth2Scope
      });
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
    });

    it('should update desciption for created scope', async () => {
      const mockDescription = 'Mock update scope';
      scope.description = mockDescription;
      const updatedScope = await client.authorizationServerApi.replaceOAuth2Scope({authServerId: authServer.id, scopeId: scope.id, oAuth2Scope: scope});
      expect(updatedScope.id).to.equal(scope.id);
      expect(updatedScope.description).to.equal(mockDescription);
    });
  });

  describe('Delete scope', () => {
    let scope: OAuth2Scope;
    beforeEach(async () => {
      scope = await client.authorizationServerApi.createOAuth2Scope({
        authServerId: authServer.id,
        oAuth2Scope: mockScope as OAuth2Scope
      });
    });

    it('should not get scope after deletion', async () => {
      const res = await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
      expect(res).to.equal(undefined);
      try {
        await client.authorizationServerApi.getOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
