const utils = require('../utils');
const okta = require('../../');
const models = require('../../src/models');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-create`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
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
      profile: {
        firstName: 'John',
        lastName: 'Activate',
        email: 'john-activate@example.com',
        login: 'john-activate@example.com'
      },
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.createUser(newUser);
  });

  it('should allow me to create a Call factor', async () => {
    const factor = {
      factorType: 'call',
      provider: 'OKTA',
      profile: {
        phoneNumber: '415 123 1234'
      }
    };
    const createdFactor = await client.addFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('call');
    expect(createdFactor).to.be.instanceof(models.Factor);
    expect(createdFactor).to.be.instanceof(models.CallFactor);
  });

  it('should allow me to create a Push factor', async () => {
    const factor = {
      factorType: 'push',
      provider: 'OKTA'
    };
    const createdFactor = await client.addFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('push');
    expect(createdFactor).to.be.instanceof(models.Factor);
    expect(createdFactor).to.be.instanceof(models.PushFactor);
  });

  it('should allow me to create a Security Question factor', async () => {
    const factor = {
      factorType: 'question',
      provider: 'OKTA',
      profile: {
        question: 'disliked_food',
        answer: 'pizza'
      }
    };
    const createdFactor = await client.addFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('question');
    expect(createdFactor).to.be.instanceof(models.Factor);
    expect(createdFactor).to.be.instanceof(models.SecurityQuestionFactor);
  });

  it('should allow me to create a SMS factor', async () => {
    const factor = {
      factorType: 'sms',
      provider: 'OKTA',
      profile: {
        phoneNumber: '415 123 1234'
      }
    };
    const createdFactor = await client.addFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('sms');
    expect(createdFactor).to.be.instanceof(models.Factor);
    expect(createdFactor).to.be.instanceof(models.SmsFactor);
  });
});

