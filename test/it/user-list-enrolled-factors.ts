import utils = require('../utils');
import {
  Client,
  DefaultRequestExecutor,
  v3
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
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-list-enrolled-factors'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.createUser(newUser);

    const authenticatorPolicies: v3.Policy[] = [];
    for await (const policy of (await client.listPolicies({type: 'MFA_ENROLL'}))) {
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
    await client.updatePolicy(defaultPolicy.id, defaultPolicy);
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to list a user\'s enrolled factors', async () => {
    // using Call factor as there appears to be an org limit for SMS factor enrollments
    const callFactor: v3.CallUserFactor = {
      factorType: 'call',
      provider: 'OKTA',
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    const securityQuestionFactor: v3.SecurityQuestionUserFactor = {
      factorType: 'question',
      provider: 'OKTA',
      profile: {
        question: 'disliked_food',
        answer: 'pizza'
      }
    };
    await client.enrollFactor(createdUser.id, callFactor);
    await client.enrollFactor(createdUser.id, securityQuestionFactor);
    const collection = await client.listFactors(createdUser.id);
    const factors = [];
    await collection.each(factor => factors.push(factor));
    expect(factors[1]).to.be.instanceof(v3.CallUserFactor);
    expect(factors[0]).to.be.instanceof(v3.SecurityQuestionUserFactor);
  });
});
