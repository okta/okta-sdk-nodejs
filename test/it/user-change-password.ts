import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-change-password`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should change a users password', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-change-password'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = { activate : true };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Change the user's password
    const changePasswordCredentials = {
      oldpassword: { value: 'Abcd1234#@' },
      newPassword: { value: '1234Abcd' }
    };

    // Need to wait 1 second here as that is the minimum time resolution of the 'passwordChanged' field
    await utils.delay(1000);
    await client.changePassword(createdUser.id, changePasswordCredentials);

    // 3. Verify that password was updated
    const updatedUser = await client.getUser(createdUser.id);
    expect(new Date(updatedUser.passwordChanged)).to.be.gt(new Date(createdUser.passwordChanged));

    // 4. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
