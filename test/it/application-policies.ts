import {
  Client,
  DefaultRequestExecutor,
  OpenIdConnectApplication,
  CreateOrUpdatePolicy,
  AccessPolicy,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import faker = require('@faker-js/faker');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

describe('ApplicationPoliciesApi', () => {
  let application: OpenIdConnectApplication;
  let policy: CreateOrUpdatePolicy;

  before(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getOIDCApplication()
    }) as OpenIdConnectApplication;

    const policyName = `node-sdk: Policy ${faker.random.word()}`.substring(0, 49);
    const policyData: AccessPolicy = {
      type: 'ACCESS_POLICY',
      status: 'ACTIVE',
      name: policyName,
      description: 'Policy',
    };
    policy = await client.policyApi.createPolicy({policy: policyData});
  });

  after(async () => {
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
    if (policy) {
      try {
        await client.policyApi.deactivatePolicy({policyId: policy.id});
      } catch (err) {
        // Some policy types (e.g. Okta:SignOn) cannot be deactivated via API (returns 400).
        // Only swallow the error in that case; re-throw anything unexpected.
        const status = (err as { status?: number; statusCode?: number }).status
          ?? (err as { status?: number; statusCode?: number }).statusCode;
        if (status !== 400) {
          throw err;
        }
      }
      await client.policyApi.deletePolicy({policyId: policy.id});
    }
  });

  it('Assign', async () => {
    await client.applicationApi.assignApplicationPolicy({
      appId: application.id,
      policyId: policy.id,
    });
  });
});
