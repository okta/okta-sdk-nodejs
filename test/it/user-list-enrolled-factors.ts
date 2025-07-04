import utils = require('../utils');
import {
  UserFactorCall,
  Client,
  DefaultRequestExecutor,
  Policy,
  UserFactorSecurityQuestion,
  User
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-enrolled-factors`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

/**
 * IMPORTANT:
 *
 * In order for these tests to complete, you must enable all used factor types on the org under test
 */

describe('User API tests', () => {
  let createdUser: User;
  before(async () => {
    // 1. Ensure Security Question is active
    await utils.activateSecurityQuestion(client);

    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-list-enrolled-factors'),
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
    const defaultPolicy = authenticatorPolicies.find(policy => policy.name === 'Default Policy');
    // enable Phone and Security Question authenticators
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

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to list a user\'s enrolled factors', async () => {
    // using Call factor as there appears to be an org limit for SMS factor enrollments
    const callFactor: UserFactorCall = {
      factorType: 'call',
      provider: 'OKTA',
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    const securityQuestionFactor: UserFactorSecurityQuestion = {
      factorType: 'question',
      provider: 'OKTA',
      profile: {
        question: 'disliked_food',
        answer: 'pizza'
      }
    };
    await client.userFactorApi.enrollFactor({
      userId: createdUser.id,
      body: callFactor
    });
    await client.userFactorApi.enrollFactor({
      userId: createdUser.id,
      body: securityQuestionFactor
    });
    const collection = await client.userFactorApi.listFactors({
      userId: createdUser.id
    });
    const factors = [];
    await collection.each(factor => factors.push(factor));
    expect(factors[1]).to.be.instanceof(UserFactorCall);
    expect(factors[0]).to.be.instanceof(UserFactorSecurityQuestion);
  });
});
