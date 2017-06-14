const expect = require('chai').expect;
const faker = require('faker');
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/scenario/group-user-operations`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group-Member API Tests', () => {
  it('should implement the CRUD operations for Group-Member APIs', async () => {
    // 1. Create a user and a group
    const password = 'Abcd1234';
    const newUser = utils.getFakeUser(password);

    let queryParameters = { activate : 'false' };
    const createdUser = await client.createUser(newUser, queryParameters);

    const newGroup = {
      profile: {
        name: `Mocha Test Group ${faker.random.uuid()}`
      }
    };

    const createdGroup = await client.createGroup(newGroup);

    // 2. Add user to the group and validate user present in group
    await createdUser.addToGroup(createdGroup.id);
    let userInGroup = await utils.isUserInGroup(createdUser, createdGroup);
    expect(userInGroup).to.equal(true);

    // 3. Remove user from group and validate user removed
    await client.removeUserFromGroup(createdGroup.id, createdUser.id);
    userInGroup = await utils.isUserInGroup(createdUser, createdGroup);
    expect(userInGroup).to.equal(false);

    // 4. Delete the group and user
    await createdGroup.delete();
    await utils.deleteUser(createdUser);
  });

});
