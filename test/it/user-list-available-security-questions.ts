import { expect } from 'chai';
import models = require('../../src/models');
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-available-security-questions`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should allow the user\'s available security questions to be listed', async () => {
    const newUser = {
      profile: utils.getMockProfile('user-list-available-security-questions'),
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    const createdUser = await client.createUser(newUser);

    const questions = [];
    await (await client.listSupportedSecurityQuestions(createdUser.id)).each(factor => questions.push(factor));
    expect(questions.length).to.be.greaterThan(1);
    questions.forEach(factor => expect(factor).to.be.instanceof(okta.v3.SecurityQuestion));
    return await utils.deleteUser(createdUser, client);
  });
});
