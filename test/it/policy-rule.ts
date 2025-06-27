import { expect } from 'chai';
import {
  OktaSignOnPolicy,
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  OktaSignOnPolicyRule,
  Policy,
  PolicyRule,
  Group
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
import getMockRule = require('./mocks/policy-deny-rule');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-rule`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Policy Rule API', () => {
  let group: Group;
  let mockPolicy: OktaSignOnPolicy;
  let policy: Policy;
  beforeEach(async () => {
    group = await client.groupApi.addGroup({group: getMockGroup()});
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
    policy = await client.policyApi.createPolicy({
      policy: mockPolicy
    });
  });
  afterEach(async () => {
    await client.policyApi.deletePolicy({policyId: policy.id});
    await client.groupApi.deleteGroup({groupId: group.id});
  });

  describe('Policy rule crud', () => {
    describe('List rules', () => {
      let rule: PolicyRule;
      beforeEach(async () => {
        rule = await client.policyApi.createPolicyRule({
          policyId: policy.id,
          policyRule: getMockRule()
        });
      });
      afterEach(async () => {
        await client.policyApi.deletePolicyRule({
          policyId: policy.id,
          ruleId: rule.id
        });
      });

      it('should return a Collection', async () => {
        const rules = await client.policyApi.listPolicyRules({ policyId: policy.id });
        expect(rules).to.be.instanceOf(Collection);
      });

      it('should resolve PolicyRule in collection', async () => {
        await (await client.policyApi.listPolicyRules({ policyId: policy.id })).each(rule => {
          expect(rule).to.be.instanceOf(PolicyRule);
        });
      });
    });

    describe('Create rule', () => {
      let rule: PolicyRule;
      afterEach(async () => {
        await client.policyApi.deletePolicyRule({
          policyId: policy.id,
          ruleId: rule.id
        });
      });

      it('should return instance of PolicyRule', async () => {
        const mockRule: PolicyRule = getMockRule();
        rule = await client.policyApi.createPolicyRule({
          policyId: policy.id,
          policyRule: mockRule
        });
        expect(rule).to.be.instanceOf(PolicyRule);
        expect(rule).to.have.property('id');
        expect(rule.name).to.equal(mockRule.name);
      });
    });

    describe('Get rule', () => {
      let rule: PolicyRule;
      beforeEach(async () => {
        rule = await client.policyApi.createPolicyRule({
          policyId: policy.id,
          policyRule: getMockRule()
        });
      });
      afterEach(async () => {
        await client.policyApi.deletePolicyRule({
          policyId: policy.id,
          ruleId: rule.id
        });
      });

      it('should get PolicyRule by id', async () => {
        const ruleFromGet: OktaSignOnPolicyRule = await client.policyApi.getPolicyRule({
          policyId: policy.id,
          ruleId: rule.id
        });
        expect(ruleFromGet).to.be.instanceOf(PolicyRule);
        expect(ruleFromGet.name).to.equal(rule.name);
      });
    });

    describe('Update rule', () => {
      let rule: PolicyRule;
      beforeEach(async () => {
        rule = await client.policyApi.createPolicyRule({
          policyId: policy.id,
          policyRule: getMockRule()
        });
      });
      afterEach(async () => {
        await client.policyApi.deletePolicyRule({
          policyId: policy.id,
          ruleId: rule.id
        });
      });

      it('should update name for policy rule', async () => {
        const mockName = 'Mock update policy rule';
        rule.name = mockName;
        const updatedPolicyRule = await client.policyApi.replacePolicyRule({
          policyId: policy.id,
          ruleId: rule.id,
          policyRule: rule
        });
        expect(updatedPolicyRule.id).to.equal(rule.id);
        expect(updatedPolicyRule.name).to.equal(mockName);
      });
    });

    describe('Delete rule', () => {
      let rule: PolicyRule;
      beforeEach(async () => {
        rule = await client.policyApi.createPolicyRule({
          policyId: policy.id,
          policyRule: getMockRule()
        });
      });

      it('should not get rule after deletion', async () => {
        await client.policyApi.deletePolicyRule({
          policyId: policy.id,
          ruleId: rule.id
        });
        try {
          await client.policyApi.getPolicyRule({
            policyId: policy.id,
            ruleId: rule.id
          });
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });

  describe('Policy rule lifecycle', () => {
    let rule: PolicyRule;
    beforeEach(async () => {
      rule = await client.policyApi.createPolicyRule({
        policyId: policy.id,
        policyRule: getMockRule()
      });
    });
    afterEach(async () => {
      await client.policyApi.deletePolicyRule({
        policyId: policy.id,
        ruleId: rule.id
      });
    });

    it('should activate rule', async () => {
      const response = await client.policyApi.activatePolicyRule({
        policyId: policy.id,
        ruleId: rule.id
      });
      expect(response).to.be.undefined;
    });

    it('should deactive rule', async () => {
      const response = await client.policyApi.deactivatePolicyRule({
        policyId: policy.id,
        ruleId: rule.id
      });
      expect(response).to.be.undefined;
    });
  });
});
