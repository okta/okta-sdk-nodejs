import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, Policy, User, UserFactor, AuthenticatorEnrollmentPolicy } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-delete`;
}

const client = new Client({
  scopes: ['okta.factors.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

/**
 * IMPORTANT:
 *
 * In order for these tests to complete, you must enable all used factor types on the org under test
 */

describe('Factors API', () => {
  let createdUser: User;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('factor-delete'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.userApi.createUser({body: newUser});

    const authenticatorPolicies: Policy[] = [];
    for await (const policy of (await client.policyApi.listPolicies({type: 'MFA_ENROLL'}))) {
      authenticatorPolicies.push(policy);
    }
    const defaultPolicy: AuthenticatorEnrollmentPolicy = authenticatorPolicies.find(policy => policy.name === 'Default Policy');
    // enable Okta Verify authenticator
    defaultPolicy.settings.authenticators = [{
      key: 'okta_verify',
      enroll: {self: 'OPTIONAL'}
    }, {
      key: 'okta_password',
      enroll: {self: 'REQUIRED'}
    }];
    await client.policyApi.replacePolicy({policyId: defaultPolicy.id, policy: defaultPolicy});
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to delete a factor', async () => {
    const newFactor: UserFactor = {
      factorType: 'token:software:totp',
      provider: 'OKTA'
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: newFactor});
    const response = await client.userFactorApi.unenrollFactor({userId: createdUser.id, factorId: createdFactor.id});
    expect(response).to.be.undefined;
    let factor: UserFactor;
    try {
      factor = await client.userFactorApi.getFactor({userId: createdUser.id, factorId: createdFactor.id});
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(factor).to.be.undefined;
  });
});
