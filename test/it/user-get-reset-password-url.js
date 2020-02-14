const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;
if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-get-reset-password-url`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should get reset password URL', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-get-reset-password-url'),
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
    // TODO: receiving 403: invalid session
    const link = await createdUser.resetPassword(sendEmail);
    expect(link.resetPasswordUrl).to.not.be.null;

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
