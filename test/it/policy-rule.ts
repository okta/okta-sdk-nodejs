import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  OktaSignOnPolicyRule,
  PolicyRule,
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
import getMockRule = require('./mocks/policy-deny-rule');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-rule`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Policy Rule API', () => {
  let group;
  let mockPolicy;
  let policy;
  beforeEach(async () => {
    group = await client.createGroup(getMockGroup());
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
    policy = await client.createPolicy(mockPolicy);
  });
  afterEach(async () => {
    await client.deletePolicy(policy.id);
    await client.groupApi.deleteGroup({
      groupId: group.id
    });
  });

  describe('Policy rule crud', () => {
    describe('List rules', () => {
      let rule;
      beforeEach(async () => {
        rule = await client.createPolicyRule(policy.id, getMockRule());
      });
      afterEach(async () => {
        await client.deletePolicyRule(policy.id, rule.id);
      });

      it('should return a Collection', async () => {
        const rules = await client.listPolicyRules(policy.id);
        expect(rules).to.be.instanceOf(Collection);
      });

      it('should resolve PolicyRule in collection', async () => {
        await (await client.listPolicyRules(policy.id)).each(rule => {
          expect(rule).to.be.instanceOf(PolicyRule);
        });
      });
    });

    describe('Create rule', () => {
      let rule;
      afterEach(async () => {
        await client.deletePolicyRule(policy.id, rule.id);
      });

      it('should return instance of PolicyRule', async () => {
        const mockRule = getMockRule();
        rule = await client.createPolicyRule(policy.id, mockRule);
        expect(rule).to.be.instanceOf(PolicyRule);
        expect(rule).to.have.property('id');
        expect(rule.name).to.equal(mockRule.name);
      });
    });

    describe('Get rule', () => {
      let rule;
      beforeEach(async () => {
        rule = await client.createPolicyRule(policy.id, getMockRule());
      });
      afterEach(async () => {
        await client.deletePolicyRule(policy.id, rule.id);
      });

      it('should get PolicyRule by id', async () => {
        const ruleFromGet = await client.getPolicyRule(policy.id, rule.id) as OktaSignOnPolicyRule;
        expect(ruleFromGet).to.be.instanceOf(PolicyRule);
        expect(ruleFromGet.name).to.equal(rule.name);
      });
    });

    describe('Update rule', () => {
      let rule;
      beforeEach(async () => {
        rule = await client.createPolicyRule(policy.id, getMockRule());
      });
      afterEach(async () => {
        await client.deletePolicyRule(policy.id, rule.id);
      });

      it('should update name for policy rule', async () => {
        const mockName = 'Mock update policy rule';
        rule.name = mockName;
        const updatedPolicyRule = await client.updatePolicyRule(policy.id, rule.id, rule);
        expect(updatedPolicyRule.id).to.equal(rule.id);
        expect(updatedPolicyRule.name).to.equal(mockName);
      });
    });

    describe('Delete rule', () => {
      let rule;
      beforeEach(async () => {
        rule = await client.createPolicyRule(policy.id, getMockRule());
      });

      it('should not get rule after deletion', async () => {
        await client.deletePolicyRule(policy.id, rule.id);
        try {
          await client.getPolicyRule(policy.id, rule.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });

  describe('Policy rule lifecycle', () => {
    let rule;
    beforeEach(async () => {
      rule = await client.createPolicyRule(policy.id, getMockRule());
    });
    afterEach(async () => {
      await client.deletePolicyRule(policy.id, rule.id);
    });

    it('should activate rule', async () => {
      const response = await client.activatePolicyRule(policy.id, rule.id);
      expect(response).to.be.undefined;
    });

    it('should deactive rule', async () => {
      const response = await client.deactivatePolicyRule(policy.id, rule.id);
      expect(response).to.be.undefined;
    });
  });
});
