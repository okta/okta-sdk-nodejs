import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { Client } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-delete`;
}

const client = new Client({
  scopes: ['okta.factors.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

/**
 * IMPORTANT:
 *
 * In order for these tests to complete, you must enable all used factor types on the org under test
 */

describe('Factors API', () => {
  let createdUser;
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

    const authenticatorPolicies: okta.Policy[] = [];
    for await (const policy of (await client.policyApi.listPolicies({type: 'MFA_ENROLL'}))) {
      authenticatorPolicies.push(policy);
    }
    const defaultPolicy = authenticatorPolicies.find(policy => policy.name === 'Default Policy');
    // enable Okta Verify authenticator
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore MAR 2022: MFA_ENROLL policy is not added to SDK
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
    const newFactor: okta.UserFactor = {
      factorType: 'token:software:totp',
      provider: 'OKTA'
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: newFactor});
    const response = await client.userFactorApi.unenrollFactor({userId: createdUser.id, factorId: createdFactor.id});
    expect(response).to.be.undefined;
    let factor;
    try {
      factor = await client.userFactorApi.getFactor({userId: createdUser.id, factorId: createdFactor.id});
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(factor).to.be.undefined;
  });
});
