const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-group-target-role`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User Role API Tests', () => {
  it('should add/remove Group Target to User Admin Role', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Group-Target',
        email: 'john-group-target@example.com',
        login: 'john-group-target@example.com'
      },
      credentials: {
        password: {value: 'Abcd1234'}
      }
    };

    const newGroup = {
      profile: {
        name: 'Group-Target Test Group'
      }
    };

    // Cleanup the user & group if they exist
    await utils.cleanup(client, newUser, newGroup);

    let queryParameters = { activate : 'true' };
    const createdUser = await client.createUser(newUser, queryParameters);
    const createdGroup = await client.createGroup(newGroup);

    // 2. Assign USER_ADMIN role to the user
    const roleType = { type: 'USER_ADMIN'  };
    const role = await createdUser.addRole(roleType);

    // 3. Add Group Target to User Admin Role
    await createdUser.addGroupTargetToRole(role.id, createdGroup.id);

    // 4. List Group Targets for Role
    let groupTargetPresent = await utils.isGroupTargetPresent(createdUser, createdGroup, role);
    expect(groupTargetPresent).to.equal(true);

    // 5. Remove Group Target from Admin User Role and verify removed
    // Note: Don’t remove the last group target from a role assignment, as this causes an exception.
    // To get around this, create a new group and add this group target to user admin role
    const group = {
      profile: {
        name: 'Group-Target User Admin Test Group'
      }
    };

    await utils.cleanup(client, null, group);

    const adminGroup = await client.createGroup(group);
    await createdUser.addGroupTargetToRole(role.id, adminGroup.id);

    await createdUser.removeGroupTargetFromRole(role.id, createdGroup.id);
    groupTargetPresent = await utils.isGroupTargetPresent(createdUser, createdGroup, role);
    expect(groupTargetPresent).to.equal(false);

    // 6. Delete the groups and user
    let groupsToDelete = [createdGroup, adminGroup];
    await utils.cleanup(client, createdUser, groupsToDelete);
  });
});
