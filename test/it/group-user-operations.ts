import faker = require('faker');

import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-user-operations`;
}

const client = new okta.Client({
  scopes: ['okta.groups.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Group-Member API Tests', () => {
  it('should implement the CRUD operations for Group-Member APIs', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: utils.getMockProfile('group-user-operations'),
      credentials: {
        password: {value: 'Abcd1234'}
      }
    };

    const newGroup = {
      profile: {
        name: `node-sdk: Group-Member API Test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    // Cleanup the user & group if they exist
    await utils.cleanup(client, newUser, newGroup);

    // const queryParameters = false;
    const createdUser = await client.createUser(newUser, false);
    const createdGroup = await client.createGroup(newGroup);

    // 2. Add user to the group and validate user present in group
    // await createdUser.addToGroup(createdGroup.id);
    await client.addUserToGroup(createdGroup.id, createdUser.id);
    let userInGroup = await utils.isUserInGroup(client, createdUser, createdGroup);
    expect(userInGroup).to.equal(true);

    // 3. Remove user from group and validate user removed
    // await createdGroup.removeUser(createdUser.id);
    await client.removeUserFromGroup(createdGroup.id, createdUser.id);
    userInGroup = await utils.isUserInGroup(client, createdUser, createdGroup);
    expect(userInGroup).to.equal(false);

    // 4. Delete the group and user
    await utils.cleanup(client, createdUser, createdGroup);
  });
});
