const utils = require('../utils');
const okta = require('../../');
const models = require('../../src/models');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-enrolled-factors`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
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

  it('should allow me to list a user\'s enrolled factors', async () => {
    const smsFactor = {
      factorType: 'sms',
      provider: 'OKTA',
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    const securityQuestionFactor = {
      factorType: 'question',
      provider: 'OKTA',
      profile: {
        question: 'disliked_food',
        answer: 'pizza'
      }
    };
    await client.enrollFactor(createdUser.id, smsFactor);
    await client.enrollFactor(createdUser.id, securityQuestionFactor);
    const collection = await createdUser.listFactors();
    const factors = [];
    await collection.each(factor => factors.push(factor));
    expect(factors[1]).to.be.instanceof(models.SmsUserFactor);
    expect(factors[0]).to.be.instanceof(models.SecurityQuestionUserFactor);
  });
});
