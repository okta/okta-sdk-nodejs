import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-lifecycle`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Policy Lifecycle API', () => {
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
    await client.deleteGroup(group.id);
  });

  it('should activate policy', async () => {
    const response = await client.activatePolicy(policy.id);
    expect(response).to.be.undefined;
  });

  it('should deactive policy', async () => {
    const response = await client.deactivatePolicy(policy.id);
    expect(response).to.be.undefined;
  });
});
