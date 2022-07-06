import faker = require('@faker-js/faker');

import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-group-target-role`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage', 'okta.groups.manage', 'okta.roles.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User Role API Tests', () => {
  it('should add/remove Group Target to User Admin Role', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: utils.getMockProfile('user-group-target-role'),
      credentials: {
        password: {value: 'Abcd1234'}
      }
    };

    const newGroup = {
      profile: {
        name: `node-sdk: Group Target Test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    // Cleanup the user & group if they exist
    await utils.cleanup(client, newUser, newGroup);
    const queryParameters = { activate : true };
    const createdUser = await client.createUser(newUser, queryParameters);
    const createdGroup = await client.createGroup(newGroup);

    // 2. Assign USER_ADMIN role to the user
    const roleType: okta.v3.AssignRoleRequest = { type: 'USER_ADMIN'  };
    const role = await client.assignRoleToUser(createdUser.id, roleType);

    // 3. Add Group Target to User Admin Role
    await client.addGroupTargetToRole(createdUser.id, role.id, createdGroup.id);

    // 4. List Group Targets for Role
    let groupTargetPresent = await utils.isGroupTargetPresent(createdUser, createdGroup, role, client);
    expect(groupTargetPresent).to.equal(true);

    // 5. Remove Group Target from Admin User Role and verify removed
    // Note: Don’t remove the last group target from a role assignment, as this causes an exception.
    // To get around this, create a new group and add this group target to user admin role
    const group = {
      profile: {
        name: `node-sdk: Group-Target User Admin Test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    await utils.cleanup(client, null, group);

    const adminGroup = await client.createGroup(group);
    await client.addGroupTargetToRole(createdUser.id, role.id, adminGroup.id);

    await client.removeGroupTargetFromRole(createdUser.id, role.id, createdGroup.id);
    groupTargetPresent = await utils.isGroupTargetPresent(createdUser, createdGroup, role, client);
    expect(groupTargetPresent).to.equal(false);

    // 6. Delete the groups and user
    const groupsToDelete = [createdGroup, adminGroup];
    await utils.cleanup(client, createdUser, groupsToDelete);
  });
});
