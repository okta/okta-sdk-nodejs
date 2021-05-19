import { expect } from 'chai';
import {
  AuthorizationServer,
  AuthorizationServerPolicy,
  Client,
  Collection,
  DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import getMockPolicy = require('./mocks/policy-oauth-authorization');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-policy`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Policies API', () => {
  let authServer: AuthorizationServer;
  before(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  after(async () => {
    await authServer.deactivate();
    await authServer.delete();
  });

  describe('List all policies', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should return a collection of policies', async () => {
      const collection = authServer.listPolicies();
      expect(collection).to.be.instanceOf(Collection);
      const policies: AuthorizationServerPolicy[] = [];
      await collection.each((p: AuthorizationServerPolicy) => policies.push(p));
      expect(policies).is.not.empty;
      const policyFindByName = policies.find(p => p.name === policy.name);
      expect(policyFindByName).to.be.exist;
      expect(policyFindByName).to.be.instanceOf(AuthorizationServerPolicy);
    });
  });

  describe('Create a Policy', () => {
    let policy;
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should get policy from auth server with created policy id', async () => {
      const mockPolicy = getMockPolicy();
      policy = await authServer.createPolicy(mockPolicy);
      expect(policy).to.be.exist;
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get a policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should get policy from auth server by id', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      expect(policyFromGet).to.be.instanceOf(AuthorizationServerPolicy);
      expect(policyFromGet.id).to.equal(policy.id);
    });
  });

  describe('Update policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
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
      policy = await authServer.createPolicy(getMockPolicy());
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
