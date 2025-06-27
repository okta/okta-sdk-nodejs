import { expect } from 'chai';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
import { ApiClient, DefaultRequestExecutor, Policy, Group, AccessPolicy } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-lifecycle`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Policy Lifecycle API', () => {
  let group: Group;
  let mockPolicy: AccessPolicy;
  let policy: Policy;
  beforeEach(async () => {
    group = await client.groupApi.createGroup({group: getMockGroup()});
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

  it('should activate policy', async () => {
    const response = await client.policyApi.activatePolicy({
      policyId: policy.id
    });
    expect(response).to.be.undefined;
  });

  it('should deactive policy', async () => {
    const response = await client.policyApi.deactivatePolicy({
      policyId: policy.id
    });
    expect(response).to.be.undefined;
  });
});
