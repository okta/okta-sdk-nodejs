import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import models = require('../../src/models');
import { expect } from 'chai';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-create`;
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
      profile: utils.getMockProfile('factor-create'),
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

  it('should allow me to create a Call factor', async () => {
    const factor = {
      factorType: 'call',
      provider: 'OKTA',
      profile: {
        phoneNumber: '415 123 1234'
      }
    };
    const createdFactor = await client.enrollFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('call');
    expect(createdFactor).to.be.instanceof(models.UserFactor);
    expect(createdFactor).to.be.instanceof(models.CallUserFactor);
  });

  it('should allow me to create a Push factor', async () => {
    const factor = {
      factorType: 'push',
      provider: 'OKTA'
    };
    const createdFactor = await client.enrollFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('push');
    expect(createdFactor).to.be.instanceof(models.UserFactor);
    expect(createdFactor).to.be.instanceof(models.PushUserFactor);
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
    const createdFactor = await client.enrollFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('question');
    expect(createdFactor).to.be.instanceof(models.UserFactor);
    expect(createdFactor).to.be.instanceof(models.SecurityQuestionUserFactor);
  });

  it('should allow me to create a SMS factor', async () => {
    const factor = {
      factorType: 'sms',
      provider: 'OKTA',
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    const createdFactor = await client.enrollFactor(createdUser.id, factor);
    expect(createdFactor.factorType).to.equal('sms');
    expect(createdFactor).to.be.instanceof(models.UserFactor);
    expect(createdFactor).to.be.instanceof(models.SmsUserFactor);
  });
});
