import { expect } from 'chai';
import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor, Policy, UserFactor, UserFactorSupported } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-available-factors`;
}

const client = new ApiClient({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User API Tests', () => {
  before(async () => {
    // Ensure Security Question is active
    await utils.activateSecurityQuestion(client);
  });

  beforeEach(async () => {
    const authenticatorPolicies: Policy[] = [];
    for await (const policy of (await client.policyApi.listPolicies({type: 'MFA_ENROLL'}))) {
      authenticatorPolicies.push(policy);
    }
    const defaultPolicy = authenticatorPolicies.find(policy => policy.name === 'Default Policy');
    // enable Okta Verify authenticator so that okta_totp factor can be activated
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore MAR 2022: MFA_ENROLL policy is not added to SDK
    defaultPolicy.settings.authenticators = [{
      key: 'phone_number',
      enroll: {self: 'OPTIONAL'}
    }, {
      key: 'security_question',
      enroll: {self: 'OPTIONAL'}
    }, {
      key: 'okta_password',
      enroll: {self: 'REQUIRED'}
    }];
    await client.policyApi.replacePolicy({policyId: defaultPolicy.id, policy: defaultPolicy});
  });
  it('should allow the user\'s factor catalog (supported factors) to be listed', async () => {
    const newUser = {
      profile: utils.getMockProfile('user-list-available-factors'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    const createdUser = await client.userApi.createUser({body: newUser});

    const factors = [];
    await (await client.userFactorApi.listSupportedFactors({
      userId: createdUser.id
    })).each(factor => factors.push(factor));
    expect(factors.length).to.be.greaterThan(1);
    factors.forEach(factor => {
      expect(factor instanceof UserFactor || factor instanceof UserFactorSupported).to.be.true;
    });
    return await utils.deleteUser(createdUser, client);
  });
});
