import { expect } from 'chai';
import faker = require('@faker-js/faker');

import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-rule-operations`;
}

const client = new okta.Client({
  scopes: ['okta.groups.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Group-Rule API tests', () => {
  it('should implement the CRUD APIs for group-rule operations', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: utils.getMockProfile('group-rule-operations'),
      credentials: {
        password: {value: 'Abcd1234#@'}
      }
    };

    const newGroup = {
      profile: {
        name: `node-sdk: Group-Rule API Test Group ${faker.random.word()}`.substring(0, 49),
      }
    };

    // Cleanup the user & group if they exist
    await utils.cleanup(client, newUser, newGroup);

    const queryParameters = { activate : true };
    const createdUser = await client.createUser(newUser, queryParameters);
    const createdGroup = await client.createGroup(newGroup);

    // 2. Create a group rule and verify rule executes
    const rule = {
      type: 'group_rule',
      name: faker.random.word().substring(0, 49),
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

    const createdRule = await client.createGroupRule(rule);
    await createdRule.activate();

    // We wait for 30 seconds for the rule to activate i.e. userInGroup = true
    let userInGroup = await utils.waitTillUserInGroup(createdUser, createdGroup, true);
    expect(userInGroup).to.equal(true);

    // 3. List group rules
    let foundRule = false;
    await client.listGroupRules().each(rule => {
      if (rule.id === createdRule.id) {
        foundRule = true;
        return false;
      }
    });
    expect(foundRule).to.equal(true);

    // 4. Deactivate the rule and update it
    await client.deactivateGroupRule(createdRule.id);

    createdRule.name = faker.random.word();
    createdRule.conditions.expression.value = 'user.lastName=="incorrect"';
    const updatedRule = await createdRule.update();
    await updatedRule.activate();

    // Triggering the updated rule will remove the user from group i.e. userInGroup = false
    userInGroup = await utils.waitTillUserInGroup(createdUser, createdGroup, false);
    expect(userInGroup).to.equal(false);

    // 5. Delete the group, user and group rule
    await updatedRule.deactivate();
    await updatedRule.delete();
    await utils.cleanup(client, createdUser, createdGroup);
  });
});
