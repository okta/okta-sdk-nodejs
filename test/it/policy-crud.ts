import { expect } from 'chai';
import {
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  Policy,
  AccessPolicy,
  Group
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-crud`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Policy Crud API', () => {
  let group: Group;
  let mockPolicy: AccessPolicy;
  beforeEach(async () => {
    group = await client.groupApi.addGroup({group: getMockGroup()});
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
  });
  afterEach(async () => {
    await client.groupApi.deleteGroup({groupId: group.id});
  });

  describe('List policies', () => {
    let policy: Policy;
    beforeEach(async () => {
      policy = await client.policyApi.createPolicy({
        policy: mockPolicy
      });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: policy.id});
    });

    it('should return a Collection', async () => {
      const policies = await client.policyApi.listPolicies({type: 'OKTA_SIGN_ON'});
      expect(policies).to.be.instanceOf(Collection);
    });

    it('should resolve Policy in collection', async () => {
      await (await client.policyApi.listPolicies({type: 'OKTA_SIGN_ON'})).each(policy => {
        expect(policy).to.be.instanceOf(Policy);
      });
    });

    it('should return a collection of policies by type', async () => {
      await (await client.policyApi.listPolicies({type: 'OKTA_SIGN_ON'})).each(policy => {
        expect(policy.type).to.equal('OKTA_SIGN_ON');
      });
    });
  });

  describe('Create policy', () => {
    let policy: Policy;
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: policy.id});
    });

    it('should return correct model', async () => {
      policy = await client.policyApi.createPolicy({
        policy: mockPolicy
      });
      expect(policy).to.be.instanceOf(Policy);
    });

    it('should return correct data with id assigned', async () => {
      policy = await client.policyApi.createPolicy({ policy: mockPolicy });
      expect(policy).to.have.property('id');
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get policy', () => {
    let policy: Policy;
    beforeEach(async () => {
      policy = await client.policyApi.createPolicy({ policy: mockPolicy });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: policy.id});
    });

    it('should get Policy by id', async () => {
      const policyFromGet = await client.policyApi.getPolicy({policyId: policy.id});
      expect(policyFromGet).to.be.instanceOf(Policy);
      expect(policyFromGet.name).to.equal(mockPolicy.name);
    });
  });

  describe('Update policy', () => {
    let policy: Policy;
    beforeEach(async () => {
      policy = await client.policyApi.createPolicy({ policy: mockPolicy });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: policy.id});
    });

    it('should update name for policy', async () => {
      const mockName = 'Mock update policy';
      policy.name = mockName;
      const updatedPolicy = await client.policyApi.replacePolicy({policyId: policy.id, policy});
      expect(updatedPolicy.id).to.equal(policy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  describe('Delete policy', () => {
    let policy: Policy;
    beforeEach(async () => {
      policy = await client.policyApi.createPolicy({ policy: mockPolicy });
    });

    it('should not get policy after deletion', async () => {
      await client.policyApi.deletePolicy({policyId: policy.id});
      try {
        await client.policyApi.getPolicy({policyId: policy.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
