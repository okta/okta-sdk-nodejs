import { expect } from 'chai';
import {
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  Policy,
  OktaSignOnPolicy,
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
  let mockPolicy: OktaSignOnPolicy;
  beforeEach(async () => {
    group = await client.groupApi.addGroup({group: getMockGroup()});
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
  });
  afterEach(async () => {
    await client.groupApi.deleteGroup({groupId: group.id});
  });

  describe('List policies', () => {
    let signonPolicy: OktaSignOnPolicy;
    beforeEach(async () => {
      signonPolicy = await client.policyApi.createPolicy({
        policy: mockPolicy
      });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: signonPolicy.id});
    });

    xit('should return a Collection', async () => {
      const policies = await client.policyApi.listPolicies({type: 'OKTA_SIGN_ON'});
      expect(policies).to.be.instanceOf(Collection);
    });

    xit('should resolve Policy in collection', async () => {
      await (await client.policyApi.listPolicies({type: 'OKTA_SIGN_ON'})).each(policy => {
        expect(policy).to.be.instanceOf(Policy);
      });
    });

    it('should return a collection of policies by type', async () => {
      await (await client.policyApi.listPolicies({type: 'OKTA_SIGN_ON'})).each(policy => {
        expect(policy.type).to.equal('OKTA_SIGN_ON');
        expect(policy).to.be.instanceOf(OktaSignOnPolicy);
        if (policy.id === signonPolicy.id) {
          expect((policy as OktaSignOnPolicy).conditions.people.groups.include).to.include(group.id);
        }
      });
    });
  });

  describe('Create policy', () => {
    let signonPolicy: OktaSignOnPolicy;
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: signonPolicy.id});
    });

    it('should return correct model', async () => {
      signonPolicy = await client.policyApi.createPolicy({
        policy: mockPolicy
      });
      expect(signonPolicy).to.be.instanceOf(Policy);
    });

    it('should return correct data with id assigned', async () => {
      signonPolicy = await client.policyApi.createPolicy({ policy: mockPolicy });
      expect(signonPolicy).to.have.property('id');
      expect(signonPolicy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get policy', () => {
    let signonPolicy: OktaSignOnPolicy;
    beforeEach(async () => {
      signonPolicy = await client.policyApi.createPolicy({ policy: mockPolicy });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: signonPolicy.id});
    });

    it('should get Policy by id', async () => {
      const policyFromGet = await client.policyApi.getPolicy({policyId: signonPolicy.id});
      expect(policyFromGet).to.be.instanceOf(Policy);
      expect(policyFromGet.name).to.equal(mockPolicy.name);
    });
  });

  describe('Update policy', () => {
    let signonPolicy: OktaSignOnPolicy;
    beforeEach(async () => {
      signonPolicy = await client.policyApi.createPolicy({ policy: mockPolicy });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicy({policyId: signonPolicy.id});
    });

    it('should update name for policy', async () => {
      const mockName = 'Mock update policy';
      signonPolicy.name = mockName;
      const updatedPolicy = await client.policyApi.replacePolicy({policyId: signonPolicy.id, policy: signonPolicy});
      expect(updatedPolicy.id).to.equal(signonPolicy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  describe('Delete policy', () => {
    let signonPolicy: OktaSignOnPolicy;
    beforeEach(async () => {
      signonPolicy = await client.policyApi.createPolicy({ policy: mockPolicy });
    });

    it('should not get policy after deletion', async () => {
      await client.policyApi.deletePolicy({policyId: signonPolicy.id});
      try {
        await client.policyApi.getPolicy({policyId: signonPolicy.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});
