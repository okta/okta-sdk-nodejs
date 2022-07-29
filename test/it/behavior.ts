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
      // await client.behaviorApi.deleteBehaviorDetectionRule({
      //   behaviorId: rule.id,
      // });
    });

    it('should return correct model', async () => {
      const mockRule = getMockBehaviorRule();
      rule = await client.behaviorApi.createBehaviorDetectionRule({
        rule: mockRule,
      });
      expect(rule).to.be.instanceOf(v3.BehaviorRule);
      expect(rule).to.have.property('id');
      expect(rule.name).to.equal(mockRule.name);
    });

  });
});
