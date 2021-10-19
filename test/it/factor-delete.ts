import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { FactorProvider, FactorType } from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-delete`;
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
      profile: utils.getMockProfile('factor-delete'),
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

  it('should allow me to delete a factor', async () => {
    const newFactor = {
      factorType: FactorType.Tokensoftwaretotp,
      provider: FactorProvider.Okta,
    };
    const createdFactor = await client.enrollFactor(createdUser.id, newFactor);
    // const response = await createdFactor.delete(createdUser.id);
    const response = await client.deleteFactor(createdUser.id, createdFactor.id);
    expect(response.status).to.equal(204);
    let factor;
    try {
      factor = await client.getFactor(createdUser.id, createdFactor.id);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(factor).to.be.undefined;
  });
});
