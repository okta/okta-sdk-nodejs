const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockAuthorizationServer = require('./mocks/authorization-server.json');
const mockScope = require('./mocks/scope.json');
const mockClaim = require('./mocks/claim.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-claim`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe.skip('Authorization Server Claim API', () => {
  let authServer;
  let scope;
  before(async () => {
    authServer = await client.createAuthorizationServer(mockAuthorizationServer);
    scope = await authServer.createOAuth2Scope(mockScope);
  });
  after(async () => {
    await authServer.deleteOAuth2Scope(scope.id);
    await authServer.delete();
  });

  describe('List all claims', () => {
    let claim;
    beforeEach(async () => {
      claim = await authServer.createOAuth2Claim(mockClaim);
    });
    afterEach(async () => {
      await authServer.deleteOAuth2Claim(claim.id);
    });

    it('should return a collection of policies', async () => {
      const collection = authServer.listOAuth2Claims();
      expect(collection).to.be.instanceOf(Collection);
      const claims = [];
      await collection.each(c => claims.push(c));
      expect(claims).is.not.empty;
      const claimFindByName = claims.find(c => c.name === mockClaim.name);
      expect(claimFindByName).to.be.exist;
      expect(claimFindByName).to.be.instanceOf(models.OAuth2Claim);
    });
  });

  describe('Create a claim', () => {
    let claim;
    afterEach(async () => {
      await authServer.deleteOAuth2Claim(claim.id);
    });

    it('should get claim from auth server with created claim id', async () => {
      claim = await authServer.createOAuth2Claim(mockClaim);
      expect(claim).to.be.exist;
      expect(claim.name).to.equal(mockClaim.name);
    });
  });

  describe('Get a claim', () => {
    let claim;
    beforeEach(async () => {
      claim = await authServer.createOAuth2Claim(mockClaim);
    });
    afterEach(async () => {
      await authServer.deleteOAuth2Claim(claim.id);
    });

    it('should get claim from auth server by id', async () => {
      const claimFromGet = await authServer.getOAuth2Claim(claim.id);
      expect(claimFromGet).to.be.instanceOf(models.OAuth2Claim);
      expect(claimFromGet.id).to.equal(claim.id);
    });
  });

  describe('Update claim', () => {
    let claim;
    beforeEach(async () => {
      claim = await authServer.createOAuth2Claim(mockClaim);
    });
    afterEach(async () => {
      await authServer.deleteOAuth2Claim(claim.id);
    });

    it('should update name for created scope', async () => {
      const mockName = 'MockUpdateClaim';
      claim.name = mockName;
      const updatedClaim = await authServer.updateOAuth2Claim(claim.id, claim);
      expect(updatedClaim.id).to.equal(claim.id);
      expect(updatedClaim.name).to.equal(mockName);
    });
  });

  describe('Delete claim', () => {
    let claim;
    beforeEach(async () => {
      claim = await authServer.createOAuth2Claim(mockClaim);
    });

    it('should not get claim after deletion', async () => {
      const res = await authServer.deleteOAuth2Claim(claim.id);
      expect(res.status).to.equal(204);
      try {
        await authServer.getOAuth2Claim(claim.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
