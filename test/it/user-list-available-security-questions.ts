import { expect } from 'chai';
import utils = require('../utils');
import { Client, CreateUserRequest, DefaultRequestExecutor, SecurityQuestion } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-available-security-questions`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should allow the user\'s available security questions to be listed', async () => {
    const newUser: CreateUserRequest = {
      profile: utils.getMockProfile('user-list-available-security-questions'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    const createdUser = await client.userApi.createUser({body: newUser});

    const questions = [];
    await (await client.userFactorApi.listSupportedSecurityQuestions({
      userId: createdUser.id
    })).each(factor => questions.push(factor));
    expect(questions.length).to.be.greaterThan(1);
    questions.forEach(factor => expect(factor).to.be.instanceof(SecurityQuestion));
    return await utils.deleteUser(createdUser, client);
  });
});
