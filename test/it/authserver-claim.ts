import { expect } from 'chai';
import {
  AuthorizationServer,
  Client,
  Collection,
  DefaultRequestExecutor,
  OAuth2Claim,
  OAuth2Scope
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
  let authServer: AuthorizationServer;
  let scope: OAuth2Scope;
  before(async () => {
    authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
    scope = await client.authorizationServerApi.createOAuth2Scope({authServerId: authServer.id, oAuth2Scope: mockScope as OAuth2Scope});
    expect(scope?.id).to.not.be.undefined;
  });
  after(async () => {
    await client.authorizationServerApi.deleteOAuth2Scope({authServerId: authServer.id, scopeId: scope.id});
    await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
  });

  describe('List all claims', () => {
    let claim: OAuth2Claim;
    beforeEach(async () => {
      claim = await client.authorizationServerApi.createOAuth2Claim({authServerId: authServer.id, oAuth2Claim: mockClaim as OAuth2Claim});
      expect(claim?.id).to.not.be.undefined;
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
    });

    it('should return a collection of policies', async () => {
      const collection = await client.authorizationServerApi.listOAuth2Claims({authServerId: authServer.id});
      expect(collection).to.be.instanceOf(Collection);
      const claims = [];
      await collection.each(c => claims.push(c));
      expect(claims).is.not.empty;
      const claimFindByName = claims.find(c => c.name === mockClaim.name);
      expect(claimFindByName).to.be.exist;
      expect(claimFindByName).to.be.instanceOf(OAuth2Claim);
    });
  });

  describe('Create a claim', () => {
    let claim: OAuth2Claim;
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
    });

    it('should get claim from auth server with created claim id', async () => {
      claim = await client.authorizationServerApi.createOAuth2Claim({authServerId: authServer.id, oAuth2Claim: mockClaim as OAuth2Claim});
      expect(claim).to.be.exist;
      expect(claim.name).to.equal(mockClaim.name);
    });
  });

  describe('Get a claim', () => {
    let claim: OAuth2Claim;
    beforeEach(async () => {
      claim = await client.authorizationServerApi.createOAuth2Claim({authServerId: authServer.id, oAuth2Claim: mockClaim as OAuth2Claim});
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
    });

    it('should get claim from auth server by id', async () => {
      const claimFromGet = await client.authorizationServerApi.getOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
      expect(claimFromGet).to.be.instanceOf(OAuth2Claim);
      expect(claimFromGet.id).to.equal(claim.id);
    });
  });

  describe('Update claim', () => {
    let claim: OAuth2Claim;
    beforeEach(async () => {
      claim = await client.authorizationServerApi.createOAuth2Claim({authServerId: authServer.id, oAuth2Claim: mockClaim as OAuth2Claim});
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
    });

    it('should update name for created scope', async () => {
      const mockName = 'MockUpdateClaim';
      claim.name = mockName;
      const updatedClaim = await client.authorizationServerApi.replaceOAuth2Claim({authServerId: authServer.id, claimId: claim.id, oAuth2Claim: claim});
      expect(updatedClaim.id).to.equal(claim.id);
      expect(updatedClaim.name).to.equal(mockName);
    });
  });

  describe('Delete claim', () => {
    let claim: OAuth2Claim;
    beforeEach(async () => {
      claim = await client.authorizationServerApi.createOAuth2Claim({authServerId: authServer.id, oAuth2Claim: mockClaim as OAuth2Claim});
    });

    it('should not get claim after deletion', async () => {
      const res = await client.authorizationServerApi.deleteOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
      expect(res).to.equal(undefined);
      try {
        await client.authorizationServerApi.getOAuth2Claim({authServerId: authServer.id, claimId: claim.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
