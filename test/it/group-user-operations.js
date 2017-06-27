const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-user-operations`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group-Member API Tests', () => {
  it('should implement the CRUD operations for Group-Member APIs', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'With-Group',
        email: 'john-with-group@example.com',
        login: 'john-with-group@example.com'
      },
      credentials: {
        password: {value: 'Abcd1234'}
      }
    };

    const newGroup = {
      profile: {
        name: 'Group-Member API Test Group'
      }
    };

    // Cleanup the user & group if they exist
    await utils.cleanup(client, newUser, newGroup);

    let queryParameters = { activate : 'false' };
    const createdUser = await client.createUser(newUser, queryParameters);
    const createdGroup = await client.createGroup(newGroup);

    // 2. Add user to the group and validate user present in group
    await createdUser.addToGroup(createdGroup.id);
    let userInGroup = await utils.isUserInGroup(createdUser, createdGroup);
    expect(userInGroup).to.equal(true);

    // 3. Remove user from group and validate user removed
    await createdGroup.removeUser(createdUser.id);
    userInGroup = await utils.isUserInGroup(createdUser, createdGroup);
    expect(userInGroup).to.equal(false);

    // 4. Delete the group and user
    await utils.cleanup(client, createdUser, createdGroup);
  });
});
