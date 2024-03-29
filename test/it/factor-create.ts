import utils = require('../utils');
import {
  CallUserFactor,
  Client,
  DefaultRequestExecutor,
  Policy,
  PushUserFactor,
  SecurityQuestionUserFactor,
  SmsUserFactor,
  UserFactor,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-create`;
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
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('factor-create'),
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
    // enable Okta Verify, Security Question and Phone authenticators
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore MAR 2022: MFA_ENROLL policy is not added to SDK
    defaultPolicy.settings.authenticators = [{
      key: 'okta_verify',
      enroll: {self: 'OPTIONAL'}
    }, {
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

  it('should allow me to create a Call factor', async () => {
    const factor: CallUserFactor = {
      factorType: 'call',
      provider: 'OKTA',
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    expect(createdFactor.factorType).to.equal('call');
    expect(createdFactor).to.be.instanceof(UserFactor);
    expect(createdFactor).to.be.instanceof(CallUserFactor);
  });

  it('should allow me to create a Push factor', async () => {
    const factor: PushUserFactor = {
      factorType: 'push',
      provider: 'OKTA'
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    expect(createdFactor.factorType).to.equal('push');
    expect(createdFactor).to.be.instanceof(UserFactor);
    expect(createdFactor).to.be.instanceof(PushUserFactor);
  });

  it('should allow me to create a Security Question factor', async () => {
    const factor: SecurityQuestionUserFactor = {
      factorType: 'question',
      provider: 'OKTA',
      profile: {
        question: 'disliked_food',
        answer: 'pizza'
      }
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    expect(createdFactor.factorType).to.equal('question');
    expect(createdFactor).to.be.instanceof(UserFactor);
    expect(createdFactor).to.be.instanceof(SecurityQuestionUserFactor);
  });

  it('should allow me to create a SMS factor', async () => {
    const factor: SmsUserFactor = {
      factorType: 'sms',
      provider: 'OKTA',
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    try {
      const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
      expect(createdFactor.factorType).to.equal('sms');
      expect(createdFactor).to.be.instanceof(UserFactor);
      expect(createdFactor).to.be.instanceof(SmsUserFactor);
    } catch (e) {
      expect(e.status).to.equal(429);
      expect(e.message).to.contain('Your free tier organization has reached the limit of sms requests');
    }
  });
});
