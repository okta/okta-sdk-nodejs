const speakeasy = require('speakeasy');

const utils = require('../utils');
const okta = require('../../');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-activate`;
}

const client = new okta.Client({
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
      factorType: 'token:software:totp',
      provider: 'OKTA'
    };
    const createdFactor = await client.addFactor(createdUser.id, factor);
    expect(createdFactor.status).to.be.equal('PENDING_ACTIVATION');
    const passCode = speakeasy.totp({
      secret: createdFactor._embedded.activation.sharedSecret,
      encoding: 'base32'
    });
    const updatedFactor = await createdFactor.activate(createdUser.id, { passCode });
    expect(updatedFactor.status).to.equal('ACTIVE');
  });
});
