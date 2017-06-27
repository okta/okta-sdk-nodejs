const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-expire-password`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should expire a users password', async () => {
    // 1. Create a user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Expire-Password',
        email: 'john-expire-password@example.com',
        login: 'john-expire-password@example.com'
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

    // 2. Expire the user's password with tempPassword=true
    queryParameters = { tempPassword : 'true' };
    const response = await createdUser.expirePassword(queryParameters);
    expect(response.tempPassword).to.not.be.null;

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
