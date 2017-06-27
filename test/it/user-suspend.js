const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-suspend`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should suspend/unsuspend a user', async () => {
    // 1. Create a user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Suspend',
        email: 'john-suspend@example.com',
        login: 'john-suspend@example.com'
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

    // 2. Suspend the user and verify user in list of suspended users
    await createdUser.suspend();
    queryParameters = { filter: 'status eq \"SUSPENDED\"' };
    let userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
    expect(userPresent).to.equal(true);

    // 3. Unsuspend the user and verify user in list of active users
    await createdUser.unsuspend();
    queryParameters = { filter: 'status eq \"ACTIVE\"' };
    userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
    expect(userPresent).to.equal(true);

    // 4. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
