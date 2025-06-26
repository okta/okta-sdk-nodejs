import { expect } from 'chai';
import { spy } from 'sinon';
import {
  BehaviorRule,
  BehaviorRuleVelocity,
  BehaviorRuleAnomalousDevice,
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  BehaviorRuleAnomalousIP,
  BehaviorRuleAnomalousLocation,
} from '@okta/okta-sdk-nodejs';
import getMockBehaviorRule = require('./mocks/behavior-rule.js');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;
import faker = require('@faker-js/faker');

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/behaviors`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Behavior API', () => {
  describe('Create', () => {
    let rule: BehaviorRule;
    afterEach(async () => {
      if (rule) {
        await client.behaviorApi.deleteBehaviorDetectionRule({
          behaviorId: rule.id,
        });
      }
    });

    it('should create rule of type ANOMALOUS_DEVICE', async () => {
      const mockRule: BehaviorRuleAnomalousDevice = getMockBehaviorRule('ANOMALOUS_DEVICE');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      const createdRule: BehaviorRuleAnomalousDevice = rule;
      expect(createdRule).to.be.instanceOf(BehaviorRule);
      expect(createdRule).to.have.property('id');
      expect(createdRule.name).to.equal(mockRule.name);
      expect(createdRule.settings.maxEventsUsedForEvaluation).to.equal(mockRule.settings.maxEventsUsedForEvaluation);
    });

    it('should create rule of type ANOMALOUS_IP', async () => {
      const mockRule: BehaviorRuleAnomalousIP = getMockBehaviorRule('ANOMALOUS_IP');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      const createdRule: BehaviorRuleAnomalousIP = rule;
      expect(createdRule).to.be.instanceOf(BehaviorRule);
      expect(createdRule).to.have.property('id');
      expect(createdRule.name).to.equal(mockRule.name);
      expect(createdRule.settings.maxEventsUsedForEvaluation).to.equal(mockRule.settings.maxEventsUsedForEvaluation);
    });

    it('should create rule of type ANOMALOUS_LOCATION', async () => {
      const mockRule: BehaviorRuleAnomalousLocation = getMockBehaviorRule('ANOMALOUS_LOCATION');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      const createdRule: BehaviorRuleAnomalousLocation = rule;
      expect(createdRule).to.be.instanceOf(BehaviorRule);
      expect(createdRule).to.have.property('id');
      expect(createdRule.name).to.equal(mockRule.name);
      expect(createdRule.settings.granularity).to.equal(mockRule.settings.granularity);
      expect(createdRule.settings.radiusKilometers).to.equal(mockRule.settings.radiusKilometers);
    });

    it('should create rule of type VELOCITY', async () => {
      const mockRule: BehaviorRuleVelocity = getMockBehaviorRule('VELOCITY');
      const createdRule: BehaviorRuleVelocity = rule;
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(createdRule).to.be.instanceOf(BehaviorRule);
      expect(createdRule).to.have.property('id');
      expect(createdRule.name).to.equal(mockRule.name);
      expect(createdRule.settings.velocityKph).to.equal(mockRule.settings.velocityKph);
    });
  });

  describe('Update', () => {
    const mockRule: BehaviorRuleVelocity = getMockBehaviorRule('VELOCITY');
    let rule: BehaviorRuleVelocity;
    beforeEach(async () => {
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(BehaviorRule);
      expect(rule.name).to.equal(mockRule.name);
      expect(rule.settings.velocityKph).to.equal(mockRule.settings.velocityKph);
    });
    afterEach(async () => {
      if (rule) {
        await client.behaviorApi.deleteBehaviorDetectionRule({
          behaviorId: rule.id,
        });
      }
    });

    it('should update rule of type VELOCITY', async () => {
      rule.name += ' (updated)';
      rule.settings.velocityKph = 900;
      const updatedRule: BehaviorRuleVelocity = await client.behaviorApi.replaceBehaviorDetectionRule({
        behaviorId: rule.id,
        rule,
      });
      expect(updatedRule).to.be.instanceOf(BehaviorRule);
      expect(updatedRule.name).to.equal(rule.name);
      expect(updatedRule.settings.velocityKph).to.equal(rule.settings.velocityKph);
    });

    it('should activate and deactivate rule', async () => {
      expect(rule.status).to.equal('ACTIVE');
      let updatedRule: BehaviorRuleVelocity = await client.behaviorApi.deactivateBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      expect(updatedRule.status).to.equal('INACTIVE');

      updatedRule = await client.behaviorApi.activateBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      expect(updatedRule.status).to.equal('ACTIVE');
    });
  });

  describe('Get', () => {
    const mockRule: BehaviorRuleVelocity = getMockBehaviorRule('VELOCITY');
    let rule: BehaviorRuleVelocity;
    beforeEach(async () => {
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
    });
    afterEach(async () => {
      if (rule) {
        await client.behaviorApi.deleteBehaviorDetectionRule({
          behaviorId: rule.id,
        });
      }
    });

    it('should get rule by id', async () => {
      const rule2: BehaviorRuleVelocity = await client.behaviorApi.getBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      expect(rule2).to.be.instanceOf(BehaviorRule);
      expect(rule2.name).to.equal(rule.name);
      expect(rule2.settings.velocityKph).to.equal(rule.settings.velocityKph);
    });
  });

  describe('Delete', () => {
    const mockRule: BehaviorRuleVelocity = getMockBehaviorRule('VELOCITY');
    let rule: BehaviorRuleVelocity;
    beforeEach(async () => {
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
    });

    it('should delete rule by id', async () => {
      await client.behaviorApi.deleteBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      try {
        await client.behaviorApi.getBehaviorDetectionRule({
          behaviorId: rule.id,
        });
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('List', () => {
    const rules: Array<BehaviorRule> = [];
    before(async () => {
      const types = [
        'ANOMALOUS_DEVICE',
        'VELOCITY'
      ];
      for (const type of types) {
        for (let i = 0 ; i < 2 ; i++) {
          const rule = await client.behaviorApi.createBehaviorDetectionRule({
            rule: {
              ...getMockBehaviorRule(type),
              name: `node-sdk: ${type} ${i} ${faker.random.word()}`.substring(0, 49),
            },
          });
          rules.push(rule);
        }
      }
    });

    after(async () => {
      for (const rule of rules) {
        await client.behaviorApi.deleteBehaviorDetectionRule({
          behaviorId: rule.id,
        });
      }
    });

    it('should return a collection of BehaviorRule', async () => {
      const rules = await client.behaviorApi.listBehaviorDetectionRules();
      expect(rules).to.be.instanceOf(Collection);
      await rules.each(rule => {
        expect(rule).to.be.instanceOf(BehaviorRule);
      });
    });

    it('should return a collection with pagination', async () => {
      const listIds = new Set();
      const collection = await client.behaviorApi.listBehaviorDetectionRules({
        limit: 2
      });
      const pageSpy = spy(collection, 'getNextPage');
      await collection.each(rule => {
        expect(listIds.has(rule.id)).to.be.false;
        listIds.add(rule.id);
      });
      expect(listIds.size).to.be.greaterThanOrEqual(4);
      expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(2);
    });
  });
});
