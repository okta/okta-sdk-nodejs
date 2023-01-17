import { expect } from 'chai';
import utils = require('../utils');
import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-get`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should get user by ID & Login', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-get'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = { activate : false };
    const createdUser = await client.userApi.createUser({body: newUser, ...queryParameters});
    utils.validateUser(createdUser, newUser);

    // 2. Get the user by user ID
    const userByID = await client.userApi.getUser({
      userId: createdUser.id
    });
    utils.validateUser(userByID, createdUser);

    // 3. Get the user by user login
    const userByLogin = await client.userApi.getUser({
      userId: createdUser.profile.login
    });
    utils.validateUser(userByLogin, createdUser);

    // 4. Delete the user
    await utils.deleteUser(createdUser, client);

    // 5. Verify user was deleted
    let err;
    try {
      await client.userApi.getUser({
        userId: createdUser.profile.login
      });
    } catch (e) {
      err = e;
    } finally {
      expect(err, 'User was not deleted').to.exist;
      expect(err.message).to.contain('Okta HTTP 404');
    }
  });
});
