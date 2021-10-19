import { FactorType } from './../../src/models/factorType';
import speakeasy = require('speakeasy');

import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { FactorProvider } from '../../src/models';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-activate`;
}

const client = new okta.Client({
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
        password: { value: 'Abcd1234' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.createUser(newUser);
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to activate a TOTP factor', async () => {
    const factor = {
      factorType: FactorType.Tokensoftwaretotp,
      provider: FactorProvider.Okta
    };
    const createdFactor = await client.enrollFactor(createdUser.id, factor);
    expect(createdFactor.status).to.be.equal('PENDING_ACTIVATION');
    const embedded = createdFactor._embedded as Record<string, unknown>;
    const activation = embedded.activation as Record<string, unknown>;
    const passCode = speakeasy.totp({
      secret: activation.sharedSecret,
      encoding: 'base32'
    });
    // @ts-ignore
    const updatedFactor = await createdFactor.activate(createdUser.id, { passCode });
    expect(updatedFactor.status).to.equal('ACTIVE');
  });
});
