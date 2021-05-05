import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  Policy } from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Policy Crud API', () => {
  let group;
  let mockPolicy;
  beforeEach(async () => {
    group = await client.createGroup(getMockGroup());
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
  });
  afterEach(async () => {
    await group.delete();
  });

  describe('List policies', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createPolicy(mockPolicy);
    });
    afterEach(async () => {
      await policy.delete();
    });

    it('should return a Collection', async () => {
      const policies = await client.listPolicies({ type: 'OKTA_SIGN_ON' });
      expect(policies).to.be.instanceOf(Collection);
    });

    it('should resolve Policy in collection', async () => {
      await client.listPolicies({ type: 'OKTA_SIGN_ON' }).each(policy => {
        expect(policy).to.be.instanceOf(Policy);
      });
    });

    it('should return a collection of policies by type', async () => {
      await client.listPolicies({ type: 'OKTA_SIGN_ON' }).each(policy => {
        expect(policy.type).to.equal('OKTA_SIGN_ON');
      });
    });
  });

  describe('Create policy', () => {
    let policy;
    afterEach(async () => {
      await policy.delete();
    });

    it('should return correct model', async () => {
      policy = await client.createPolicy(mockPolicy);
      expect(policy).to.be.instanceOf(Policy);
    });

    it('should return correct data with id assigned', async () => {
      policy = await client.createPolicy(mockPolicy);
      expect(policy).to.have.property('id');
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createPolicy(mockPolicy);
    });
    afterEach(async () => {
      await policy.delete();
    });

    it('should get Policy by id', async () => {
      const policyFromGet = await client.getPolicy(policy.id);
      expect(policyFromGet).to.be.instanceOf(Policy);
      expect(policyFromGet.name).to.equal(mockPolicy.name);
    });
  });

  describe('Update policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createPolicy(mockPolicy);
    });
    afterEach(async () => {
      await policy.delete();
    });

    it('should update name for policy', async () => {
      const mockName = 'Mock update policy';
      policy.name = mockName;
      const updatedPolicy = await policy.update();
      expect(updatedPolicy.id).to.equal(policy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  describe('Delete policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createPolicy(mockPolicy);
    });

    it('should not get policy after deletion', async () => {
      await policy.delete();
      try {
        await client.getPolicy(policy.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
