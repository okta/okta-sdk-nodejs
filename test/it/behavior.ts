import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
import getMockBehaviorRule = require('./mocks/behavior-rule.js');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Behavior API', () => {
  describe('Create', () => {
    let rule;
    afterEach(async () => {
      await client.behaviorApi.deleteBehaviorDetectionRule({
        behaviorId: rule.id,
      });
    });

    it('should create rule of type ANOMALOUS_DEVICE', async () => {
      const mockRule = getMockBehaviorRule('ANOMALOUS_DEVICE');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(v3.BehaviorRule);
      expect(rule).to.have.property('id');
      expect(rule.name).to.equal(mockRule.name);
      expect(rule.settings.maxEventsUsedForEvaluation).to.equal(mockRule.settings.maxEventsUsedForEvaluation);
    });

    it('should create rule of type ANOMALOUS_IP', async () => {
      const mockRule = getMockBehaviorRule('ANOMALOUS_IP');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(v3.BehaviorRule);
      expect(rule).to.have.property('id');
      expect(rule.name).to.equal(mockRule.name);
      expect(rule.settings.maxEventsUsedForEvaluation).to.equal(mockRule.settings.maxEventsUsedForEvaluation);
    });

    it('should create rule of type ANOMALOUS_LOCATION', async () => {
      const mockRule = getMockBehaviorRule('ANOMALOUS_LOCATION');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(v3.BehaviorRule);
      expect(rule).to.have.property('id');
      expect(rule.name).to.equal(mockRule.name);
      expect(rule.settings.granularity).to.equal(mockRule.settings.granularity);
      expect(rule.settings.radiusKilometers).to.equal(mockRule.settings.radiusKilometers);
    });

    it('should create rule of type VELOCITY', async () => {
      const mockRule = getMockBehaviorRule('VELOCITY');
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(v3.BehaviorRule);
      expect(rule).to.have.property('id');
      expect(rule.name).to.equal(mockRule.name);
      expect(rule.settings.velocityKph).to.equal(mockRule.settings.velocityKph);
    });
  });

  describe('Update', () => {
    const mockRule = getMockBehaviorRule('VELOCITY');
    let rule: v3.BehaviorRuleVelocity;
    beforeEach(async () => {
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(v3.BehaviorRule);
      expect(rule.name).to.equal(mockRule.name);
      expect(rule.settings.velocityKph).to.equal(mockRule.settings.velocityKph);
    });
    afterEach(async () => {
      await client.behaviorApi.deleteBehaviorDetectionRule({
        behaviorId: rule.id,
      });
    });

    it('should get rule by id', async () => {
      const rule2: v3.BehaviorRuleVelocity = await client.behaviorApi.getBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      console.log(rule2);
    });

    it('should update rule of type VELOCITY', async () => {
      rule.name += ' (updated)';
      rule.settings.velocityKph = 900;
      const updatedRule: v3.BehaviorRuleVelocity = await client.behaviorApi.updateBehaviorDetectionRule({
        behaviorId: rule.id,
        rule,
      });
      expect(updatedRule).to.be.instanceOf(v3.BehaviorRule);
      expect(updatedRule.name).to.equal(rule.name);
      expect(updatedRule.settings.velocityKph).to.equal(rule.settings.velocityKph);
    });

    it('should activate and deactivate rule', async () => {
      expect(rule.status).to.equal('ACTIVE');
      let updatedRule: v3.BehaviorRuleVelocity = await client.behaviorApi.deactivateBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      expect(updatedRule.status).to.equal('INACTIVE');

      updatedRule = await client.behaviorApi.activateBehaviorDetectionRule({
        behaviorId: rule.id,
      });
      expect(updatedRule.status).to.equal('ACTIVE');
    });
  });
});
