import utils = require('../utils');
import {
  UserFactorCall,
  ApiClient,
  DefaultRequestExecutor,
  Policy,
  User,
  UserFactorPush,
  UserFactorSecurityQuestion,
  UserFactorSMS,
  UserFactor,
  OktaApiError,
  AuthenticatorEnrollmentPolicy,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-create`;
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

    // 2. Create a user
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
    const defaultPolicy: AuthenticatorEnrollmentPolicy = authenticatorPolicies.find(policy => policy.name === 'Default Policy');
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

  it('should not allow me to create a factor that is not enabled in the Org', async () => {
    try {
      const factor: UserFactor = {
        factorType: 'push',
        provider: 'YUBICO'
      };
      const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
      expect(createdFactor.factorType).to.equal('push');
      expect(createdFactor.provider).to.equal('YUBICO');
      expect(createdFactor).to.be.instanceof(UserFactorPush);
    } catch (e) {
      expect(e instanceof OktaApiError);
      expect((e as OktaApiError).errorCauses?.[0]?.errorSummary).to.equal('Factor not enabled.');
    }
  });

  it('should not allow me to create an invalid factor', async () => {
    let err: OktaApiError;
    try {
      const factor: UserFactorPush = {
        factorType: 'push',
        /* eslint-disable @typescript-eslint/no-explicit-any */
        provider: 'UNSUPPORTED_PROVIDER' as any
      };
      await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    } catch (e) {
      err = e;
    }
    expect(err).not.to.be.undefined;
    expect(err.errorCauses?.[0]?.errorSummary).to.equal('Invalid Provider.');
  });

  it('should allow me to create a Call factor', async () => {
    try {
      const factor: UserFactorCall = {
        factorType: 'call',
        provider: 'OKTA',
        profile: {
          phoneNumber: '162 840 01133‬'
        }
      };
      const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
      expect(createdFactor.factorType).to.equal('call');
      expect(createdFactor).to.be.instanceof(UserFactor);
      expect(createdFactor).to.be.instanceof(UserFactorCall);
    } catch (e) {
      expect(e instanceof OktaApiError);
      expect((e as OktaApiError).errorCauses?.[0]?.errorSummary).to.equal('Factor not enabled.');
    }
  });

  it('should allow me to create a Push factor', async () => {
    const factor: UserFactorPush = {
      factorType: 'push',
      provider: 'OKTA'
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    expect(createdFactor.factorType).to.equal('push');
    expect(createdFactor).to.be.instanceof(UserFactor);
    expect(createdFactor).to.be.instanceof(UserFactorPush);
  });

  it('should allow me to create a Security Question factor', async () => {
    const factor: UserFactorSecurityQuestion = {
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
    expect(createdFactor).to.be.instanceof(UserFactorSecurityQuestion);
  });

  it('should allow me to create a SMS factor', async () => {
    const factor: UserFactorSMS = {
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
      expect(createdFactor).to.be.instanceof(UserFactorSMS);
    } catch (e) {
      expect(e.status).to.equal(429);
      expect(e.message).to.contain('Your free tier organization has reached the limit of sms requests');
    }
  });
});
