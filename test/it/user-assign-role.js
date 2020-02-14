const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-role-assign`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage', 'okta.roles.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User Role API Tests', () => {
  it('should assign/unassign role to a user', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-assign-role'),
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    let queryParameters = { activate : 'true' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Assign USER_ADMIN role to the user
    const roleType = { type: 'USER_ADMIN'  };
    const role = await createdUser.addRole(roleType);

    // 3. List roles for the user and verify added role
    let hasRole = await utils.doesUserHaveRole(createdUser, 'USER_ADMIN');
    expect(hasRole).to.equal(true);

    // 4. Remove role for the user
    await createdUser.removeRole(role.id);

    // 5. List roles for user and verify role was removed
    hasRole = await utils.doesUserHaveRole(createdUser, 'USER_ADMIN');
    expect(hasRole).to.equal(false);

    // 6. Delete the user
    await utils.cleanup(client, createdUser);
  });
});
