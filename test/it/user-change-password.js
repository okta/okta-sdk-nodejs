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

    let queryParameters = { activate : 'true' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Change the user's password
    const changePasswordCredentials = {
      oldPassword: { value: 'Abcd1234' },
      newPassword: { value: '1234Abcd' }
    };

    let response = await createdUser.changePassword(changePasswordCredentials);
    expect(response.provider.type).to.equal('OKTA');
    // TODO - Authenticate the user with updated password (Authn APIs not supported in SDK yet)

    // 3. Delete the user
    await utils.deleteUser(createdUser);
  });
});
