const expect = require('chai').expect;
const models = require('../../src/models');
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-available-security-questions`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should allow the user\'s available security questions to be listed', async () => {
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
    const createdUser = await client.createUser(newUser);

    const questions = [];
    await createdUser.listSupportedSecurityQuestions().each(factor => questions.push(factor));
    expect(questions.length).to.be.greaterThan(1);
    questions.forEach(factor => expect(factor).to.be.instanceof(models.SecurityQuestion));
    return await utils.deleteUser(createdUser);
  });
});
