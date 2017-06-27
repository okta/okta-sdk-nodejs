const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;
if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-get-reset-password-url`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should get reset password URL', async () => {
    // 1. Create a user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Get-Reset-Password-URL',
        email: 'john-get-reset-password-url@example.com',
        login: 'john-get-reset-password-url@example.com'
      },
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    let queryParameters = { activate : 'true' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Get the reset password link
    const sendEmail = { sendEmail : 'false' };
    const link = await createdUser.resetPassword(sendEmail);
    expect(link.resetPasswordUrl).to.not.be.null;

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
