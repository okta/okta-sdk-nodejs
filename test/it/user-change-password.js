const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-change-password`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should change a users password', async () => {
    // 1. Create a user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Change-Password',
        email: 'john-change-password@example.com',
        login: 'john-change-password@example.com'
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

    // 2. Change the user's password
    const changePasswordCredentials = {
      oldPassword: { value: 'Abcd1234' },
      newPassword: { value: '1234Abcd' }
    };

    // Need to wait 1 second here as that is the minimum time resolution of the 'passwordChanged' field
    await utils.delay(1000);
    await createdUser.changePassword(changePasswordCredentials);

    // 3. Verify that password was updated
    const updatedUser = await client.getUser(createdUser.id);
    expect(updatedUser.passwordChanged).to.be.gt(createdUser.passwordChanged);

    // 4. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
