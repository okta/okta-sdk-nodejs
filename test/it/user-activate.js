const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-activate`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should activate a user', async () => {
    // 1. Create a user
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

    let queryParameters = { activate : 'false' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Activate the user and verify user in list of active users
    const sendEmail = { sendEmail : 'false' };
    await createdUser.activate(sendEmail);
    queryParameters = { filter: 'status eq \"ACTIVE\"' };
    const userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
    expect(userPresent).to.equal(true);

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
