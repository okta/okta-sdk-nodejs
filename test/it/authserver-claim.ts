import { expect } from 'chai';
import {
  v3,
  Client,
  Collection,
  DefaultRequestExecutor
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import mockScope = require('./mocks/scope.json');
import mockClaim = require('./mocks/claim.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-claim`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Claim API', () => {
  let authServer: v3.AuthorizationServer;
  let scope: v3.OAuth2Scope;
  before(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
    scope = await client.createOAuth2Scope(authServer.id, mockScope as v3.OAuth2Scope);
    expect(scope?.id).to.not.be.undefined;
  });
  after(async () => {
    await client.deleteOAuth2Scope(authServer.id, scope.id);
    await client.deleteAuthorizationServer(authServer.id);
  });

  describe('List all claims', () => {
    let claim: v3.OAuth2Claim;
    beforeEach(async () => {
      claim = await client.createOAuth2Claim(authServer.id, mockClaim as v3.OAuth2Claim);
      expect(claim?.id).to.not.be.undefined;
    });
    afterEach(async () => {
      await client.deleteOAuth2Claim(authServer.id, claim.id);
    });

    it('should return a collection of policies', async () => {
      const collection = await client.listOAuth2Claims(authServer.id);
      expect(collection).to.be.instanceOf(Collection);
      const claims = [];
      await collection.each(c => claims.push(c));
      expect(claims).is.not.empty;
      const claimFindByName = claims.find(c => c.name === mockClaim.name);
      expect(claimFindByName).to.be.exist;
      expect(claimFindByName).to.be.instanceOf(v3.OAuth2Claim);
    });
  });

  describe('Create a claim', () => {
    let claim: v3.OAuth2Claim;
    afterEach(async () => {
      await client.deleteOAuth2Claim(authServer.id, claim.id);
    });

    it('should get claim from auth server with created claim id', async () => {
      claim = await client.createOAuth2Claim(authServer.id, mockClaim as v3.OAuth2Claim);
      expect(claim).to.be.exist;
      expect(claim.name).to.equal(mockClaim.name);
    });
  });

  describe('Get a claim', () => {
    let claim: v3.OAuth2Claim;
    beforeEach(async () => {
      claim = await client.createOAuth2Claim(authServer.id, mockClaim as v3.OAuth2Claim);
    });
    afterEach(async () => {
      await client.deleteOAuth2Claim(authServer.id, claim.id);
    });

    it('should get claim from auth server by id', async () => {
      const claimFromGet = await client.getOAuth2Claim(authServer.id, claim.id);
      expect(claimFromGet).to.be.instanceOf(v3.OAuth2Claim);
      expect(claimFromGet.id).to.equal(claim.id);
    });
  });

  describe('Update claim', () => {
    let claim: v3.OAuth2Claim;
    beforeEach(async () => {
      claim = await client.createOAuth2Claim(authServer.id, mockClaim as v3.OAuth2Claim);
    });
    afterEach(async () => {
      await client.deleteOAuth2Claim(authServer.id, claim.id);
    });

    it('should update name for created scope', async () => {
      const mockName = 'MockUpdateClaim';
      claim.name = mockName;
      const updatedClaim = await client.updateOAuth2Claim(authServer.id, claim.id, claim);
      expect(updatedClaim.id).to.equal(claim.id);
      expect(updatedClaim.name).to.equal(mockName);
    });
  });

  describe('Delete claim', () => {
    let claim: v3.OAuth2Claim;
    beforeEach(async () => {
      claim = await client.createOAuth2Claim(authServer.id, mockClaim as v3.OAuth2Claim);
    });

    it('should not get claim after deletion', async () => {
      const res = await client.deleteOAuth2Claim(authServer.id, claim.id);
      expect(res).to.equal(undefined);
      try {
        await client.getOAuth2Claim(authServer.id, claim.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
