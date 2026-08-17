import {
  Client,
  DefaultRequestExecutor,
  OpenIdConnectApplication,
  CreateOrUpdatePolicy,
  AccessPolicy,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import faker = require('@faker-js/faker');

type HttpError = { status?: number; statusCode?: number };

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

    // Policy names must be unique in the org, and faker.random.word() only has ~1400 values, so
    // it collided with leftovers from earlier runs (400 E0000001 name: Policy name already in use).
    const policyName = `node-sdk: Policy ${faker.random.alphaNumeric(10)}`.substring(0, 49);
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
      // Always attempt the delete. ACCESS_POLICY cannot be deactivated at all (400), so gating the
      // delete on a successful deactivation leaked this policy on every run. Unexpected
      // deactivation errors are still re-thrown, but only after the delete.
      let deactivateError: unknown;
      try {
        await client.policyApi.deactivatePolicy({policyId: policy.id});
      } catch (err) {
        // Some policy types (e.g. Okta:SignOn) cannot be deactivated via API (returns 400).
        // Only tolerate the error in that case; surface anything unexpected.
        const status = (err as HttpError).status ?? (err as HttpError).statusCode;
        if (status !== 400) {
          deactivateError = err;
        }
      }
      await client.policyApi.deletePolicy({policyId: policy.id});
      if (deactivateError) {
        throw deactivateError;
      }
    }
  });

  it('Assign', async () => {
    await client.applicationApi.assignApplicationPolicy({
      appId: application.id,
      policyId: policy.id,
    });
  });
});
