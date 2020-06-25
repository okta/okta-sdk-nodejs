const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockAuthorizationServer = require('./mocks/authorization-server.json');
const mockPolicy = require('./mocks/policy-oauth-authorization.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-policy`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Authorization Server Policies API', () => {
  let authServer;
  before(async () => {
    authServer = await client.createAuthorizationServer(mockAuthorizationServer);
  });
  after(async () => {
    await authServer.delete();
  });

  describe('List all policies', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(mockPolicy);
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should return a collection of policies', async () => {
      const collection = authServer.listPolicies();
      expect(collection).to.be.instanceOf(Collection);
      const policies = [];
      await collection.each(p => policies.push(p));
      expect(policies).is.not.empty;
      const policyFindByName = policies.find(p => p.name === mockPolicy.name);
      expect(policyFindByName).to.be.exist;
      expect(policyFindByName).to.be.instanceOf(models.Policy);
    });
  });

  describe('Create a Policy', () => {
    let policy;
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should get policy from auth server with created policy id', async () => {
      policy = await authServer.createPolicy(mockPolicy);
      expect(policy).to.be.exist;
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get a policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(mockPolicy);
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should get policy from auth server by id', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      expect(policyFromGet).to.be.instanceOf(models.Policy);
      expect(policyFromGet.id).to.equal(policy.id);
    });
  });

  describe('Update policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(mockPolicy);
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should update name for created policy', async () => {
      const mockName = 'Mock update policy';
      policy.name = mockName;
      const updatedPolicy = await authServer.updatePolicy(policy.id, policy);
      expect(updatedPolicy.id).to.equal(policy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  describe('Delete policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(mockPolicy);
    });

    it('should not get policy after deletion', async () => {
      const res = await authServer.deletePolicy(policy.id);
      expect(res.status).to.equal(204);
      try {
        await authServer.getPolicy(policy.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
