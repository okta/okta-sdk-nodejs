const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-rule-operations`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group-Rule API tests', () => {
  it('should implement the CRUD APIs for group-rule operations', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'With-Group-Rule',
        email: 'john-with-group-rule@example.com',
        login: 'john-with-group-rule@example.com'
      },
      credentials: {
        password: {value: 'Abcd1234'}
      }
    };

    const newGroup = {
      profile: {
        name: 'Group-Rule API Test Group'
      }
    };

    // Cleanup the user & group if they exist
    await utils.cleanup(client, newUser, newGroup);

    let queryParameters = { activate : 'true' };
    const createdUser = await client.createUser(newUser, queryParameters);
    const createdGroup = await client.createGroup(newGroup);

    // 2. Create a group rule and verify rule executes
    const rule = {
      type: 'group_rule',
      name: 'Test group rule',
      conditions: {
        people: {
          users: {
            exclude: []
          },
          groups: {
            exclude: []
          }
        },
        expression: {
          value: `user.lastName=="${createdUser.profile.lastName}"`,
          type: 'urn:okta:expression:1.0'
        }
      },
      actions: {
        assignUserToGroups: {
          groupIds: [
            createdGroup.id
          ]
        }
      }
    };

    const createdRule = await client.createRule(rule);
    await createdRule.activate();

    // We wait for 30 seconds for the rule to activate i.e. userInGroup = true
    let userInGroup = await utils.waitTillUserInGroup(createdUser, createdGroup, true);
    expect(userInGroup).to.equal(true);

    // 3. List group rules
    let foundRule = false;
    await client.listRules().each(rule => {
      if (rule.id === createdRule.id) {
        foundRule = true;
        return false;
      }
    });
    expect(foundRule).to.equal(true);

    // 4. Deactivate the rule and update it
    await client.deactivateRule(createdRule.id);

    createdRule.name = 'Test group rule updated';
    createdRule.conditions.expression.value = 'user.lastName==\"incorrect\"';
    const updatedRule = await createdRule.update();
    await updatedRule.activate();

    // Triggering the updated rule will remove the user from group i.e. userInGroup = false
    userInGroup = await utils.waitTillUserInGroup(createdUser, createdGroup, false);
    expect(userInGroup).to.equal(false);

    // 5. Delete the group, user and group rule
    await utils.cleanup(client, createdUser, createdGroup);
    await updatedRule.deactivate();
    await updatedRule.delete();
  });
});
