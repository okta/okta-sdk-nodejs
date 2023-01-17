import speakeasy = require('speakeasy');

import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { Client } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-activate`;
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
      profile: utils.getMockProfile('factor-activate'),
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
    // enable Okta Verify authenticator so that okta_totp factor can be activated
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

  it('should allow me to activate a TOTP factor', async () => {
    const factor: okta.UserFactor = {
      factorType: 'token:software:totp',
      provider: 'OKTA'
    };
    const createdFactor = await client.userFactorApi.enrollFactor({userId: createdUser.id, body: factor});
    expect(createdFactor.status).to.be.equal('PENDING_ACTIVATION');
    const embedded = createdFactor._embedded as Record<string, unknown>;
    const activation = embedded.activation as Record<string, unknown>;
    const passCode = speakeasy.totp({
      secret: activation.sharedSecret,
      encoding: 'base32'
    });
    const updatedFactor = await client.userFactorApi.activateFactor({userId: createdUser.id, factorId: createdFactor.id, body: { passCode }});
    expect(updatedFactor.status).to.equal('ACTIVE');
  });
});
