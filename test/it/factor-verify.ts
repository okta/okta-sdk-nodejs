import utils = require('../utils');
import { expect } from 'chai';
import { ApiClient, AuthenticatorEnrollmentPolicy, DefaultRequestExecutor, Policy, User, UserFactorSecurityQuestion } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-verify`;
}

const client = new ApiClient({
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
    // 1. Ensure Security Question is active
    await utils.activateSecurityQuestion(client);

    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('factor-verify'),
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
    // enable Security Question authenticator
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore MAR 2022: MFA_ENROLL policy is not added to SDK
    defaultPolicy.settings.authenticators = [{
      key: 'security_question',
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

  it('should allow me to verify a Security Question factor', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    const answer = 'pizza';
    const factor: UserFactorSecurityQuestion = {
      factorType: 'question',
      provider: 'OKTA',
      profile: {
        question: 'disliked_food',
        answer
      }
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    const response = await client.userFactorApi.verifyFactor({userId: createdUser.id, factorId: createdFactor.id, body: { answer }});
    expect(response.factorResult).to.be.equal('SUCCESS');
  });
});
