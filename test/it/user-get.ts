import { expect } from 'chai';
import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-get`;
}

const client = new ApiClient({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should get user by ID & Login', async () => {
    // Okta user should have custom attribute `age` (type `number`) added in admin dashboard
    // https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-add-custom-user-attributes.htm

    // 1. Create a user
    const newUser = {
      profile: {
        ...utils.getMockProfile('user-get'),
        age: 33
      },
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
      id: createdUser.id
    });
    utils.validateUser(userByID, createdUser);

    // 3. Get the user by user login
    const userByLogin = await client.userApi.getUser({
      id: createdUser.profile.login
    });
    utils.validateUser(userByLogin, createdUser);
    expect(userByLogin.profile.age).to.equal(newUser.profile.age);

    // 4. Delete the user
    await utils.deleteUser(createdUser, client);

    // 5. Verify user was deleted
    let err;
    try {
      await client.userApi.getUser({
        id: createdUser.profile.login
      });
    } catch (e) {
      err = e;
    } finally {
      expect(err, 'User was not deleted').to.exist;
      expect(err.message).to.contain('Okta HTTP 404');
    }
  });
});
