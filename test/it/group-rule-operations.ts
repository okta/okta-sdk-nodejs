import { expect } from 'chai';
import { spy } from 'sinon';
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

    // 2. Create group rules
    const rules = [];
    const namePrefixes = [
      'RULE_AB',
      'RULE_XY'
    ];
    for (const prefix of namePrefixes) {
      for (let i = 0 ; i < 2 ; i++) {
        const rule = {
          type: 'group_rule',
          name: `node-sdk: ${prefix} ${i} ${faker.random.word().substring(0, 49)}`,
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
        rules.push(createdRule);
      }
    }
    const firstRule = rules[0];

    // Activate first rule
    await client.activateGroupRule(firstRule.id);

    // 3a. List group rules
    let foundRule = false;
    await (await client.listGroupRules()).each(rule => {
      if (rule.id === firstRule.id) {
        foundRule = true;
        return false;
      }
    });
    expect(foundRule).to.equal(true);

    // 3b. Search group rules with pagination
    const filtered = new Set();
    const collection = await client.listGroupRules({
      search: 'RULE_AB',
      limit: 1
    });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(rule => {
      expect(filtered.has(rule.name)).to.be.false;
      filtered.add(rule.name);
      expect(rule.name.indexOf('RULE_AB')).to.not.equal(-1);
    });
    expect(filtered.size).to.equal(2);
    expect(pageSpy.getCalls().length).to.equal(2);

    // 4. Verify first rule executes
    // We wait for 30 seconds for the rule to activate i.e. userInGroup = true
    let userInGroup = await utils.waitTillUserInGroup(client, createdUser, createdGroup, true);
    expect(userInGroup).to.equal(true);

    // 4. Deactivate the rule and update it
    await client.deactivateGroupRule(firstRule.id);

    firstRule.name = faker.random.word();
    firstRule.conditions.expression.value = 'user.lastName=="incorrect"';
    const updatedRule = await client.updateGroupRule(firstRule.id, firstRule);
    await client.activateGroupRule(updatedRule.id);

    // Triggering the updated rule will remove the user from group i.e. userInGroup = false
    userInGroup = await utils.waitTillUserInGroup(client, createdUser, createdGroup, false);
    expect(userInGroup).to.equal(false);

    // 5. Delete the group, user and group rules
    await client.deactivateGroupRule(updatedRule.id);
    for (const rule of rules) {
      await client.deleteGroupRule(rule.id);
    }
    await utils.cleanup(client, createdUser, createdGroup);
  });
});
