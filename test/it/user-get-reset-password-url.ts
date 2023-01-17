import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { Client } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-get-reset-password-url`;
}

const client = new Client({
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
        password: { value: 'Abcd1234#@' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = { activate : true };
    const createdUser = await client.userApi.createUser({body: newUser, ...queryParameters});
    utils.validateUser(createdUser, newUser);

    // 2. Get the reset password link
    const sendEmail = false;
    // TODO: receiving 403: invalid session
    const link = await client.userApi.generateResetPasswordToken({
      userId: createdUser.id,
      sendEmail
    });
    expect(link.resetPasswordUrl).to.not.be.null;

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
