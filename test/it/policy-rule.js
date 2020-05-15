const expect = require('chai').expect;
const deepcopy = require('deep-copy');
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockGroup = require('./mocks/group.json');
const mockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy.json');
const mockRule = require('./mocks/policy-deny-rule.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-rule`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Policy Rule API', () => {
  let group;
  let mockPolicy;
  let policy;
  beforeEach(async () => {
    group = await client.createGroup(mockGroup);
    mockPolicy = deepcopy(mockOktaSignOnPolicy);
    mockPolicy.conditions.people.groups.include.push(group.id);
    policy = await client.createPolicy(mockPolicy);
  });
  afterEach(async () => {
    await policy.delete();
    await group.delete();
  });

  describe('Policy rule crud', () => {
    describe('List rules', () => {
      let rule;
      beforeEach(async () => {
        rule = await policy.createRule(mockRule);
      });
      afterEach(async () => {
        await rule.delete(policy.id);
      });

      it('should return a Collection', async () => {
        const rules = await policy.listPolicyRules();
        expect(rules).to.be.instanceOf(Collection);
      });

      it('should resolve PolicyRule in collection', async () => {
        await policy.listPolicyRules().each(rule => {
          expect(rule).to.be.instanceOf(models.PolicyRule);
        });
      });
    });

    describe('Create rule', () => {
      let rule;
      afterEach(async () => {
        await rule.delete(policy.id);
      });

      it('should return correct model', async () => {
        rule = await policy.createRule(mockRule);
        expect(rule).to.be.instanceOf(models.PolicyRule);
      });

      it('should return correct data with id assigned', async () => {
        rule = await policy.createRule(mockRule);
        expect(rule).to.have.property('id');
        expect(rule.name).to.equal(mockRule.name);
      });
    });

    describe('Get rule', () => {
      let rule;
      beforeEach(async () => {
        rule = await policy.createRule(mockRule);
      });
      afterEach(async () => {
        await rule.delete(policy.id);
      });

      it('should get PolicyRule by id', async () => {
        const ruleFromGet = await client.getPolicyRule(policy.id, rule.id);
        expect(ruleFromGet).to.be.instanceOf(models.PolicyRule);
        expect(ruleFromGet.name).to.equal(mockRule.name);
      });
    });

    describe('Update rule', () => {
      let rule;
      beforeEach(async () => {
        rule = await policy.createRule(mockRule);
      });
      afterEach(async () => {
        await rule.delete(policy.id);
      });

      it('should update name for policy rule', async () => {
        const mockName = 'Mock update policy rule';
        rule.name = mockName;
        const updatedPolicyRule = await rule.update(policy.id);
        expect(updatedPolicyRule.id).to.equal(rule.id);
        expect(updatedPolicyRule.name).to.equal(mockName);
      });
    });

    describe('Delete rule', () => {
      let rule;
      beforeEach(async () => {
        rule = await policy.createRule(mockRule);
      });

      it('should not get rule after deletion', async () => {
        await rule.delete(policy.id);
        try {
          await policy.getPolicyRule(rule.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });

  describe('Policy rule lifecycle', () => {
    let rule;
    beforeEach(async () => {
      rule = await policy.createRule(mockRule);
    });
    afterEach(async () => {
      await rule.delete(policy.id);
    });

    it('should activate rule', async () => {
      const response = await rule.activate(policy.id);
      expect(response.status).to.equal(204);
    });

    it('should deactive rule', async () => {
      const response = await rule.deactivate(policy.id);
      expect(response.status).to.equal(204);
    });
  });
});
