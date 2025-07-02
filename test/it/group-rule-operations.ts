import { expect } from 'chai';
import { spy } from 'sinon';
import faker = require('@faker-js/faker');

import utils = require('../utils');
import { ApiClient, CreateGroupRuleRequest, DefaultRequestExecutor, GroupRule } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-rule-operations`;
}

const client = new ApiClient({
  scopes: ['okta.groups.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Group-Rule API tests', () => {
  it('should implement the CRUD APIs for group-rule operations', async () => {
    // 1. Create a user and a group
    const newUser = {
      profile: utils.getMockProfile(`group-rule-operations-${faker.random.word()}`),
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
    const createdUser = await client.userApi.createUser({body: newUser, ...queryParameters});
    const createdGroup = await client.groupApi.addGroup({group: newGroup});

    // 2. Create group rules
    const rules: GroupRule[] = [];
    const namePrefixes = [
      'RULE_ABC',
      'RULE_XYZ'
    ];
    for (const prefix of namePrefixes) {
      for (let i = 0 ; i < 2 ; i++) {
        const rule: CreateGroupRuleRequest = {
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
        const createdRule = await client.groupApi.createGroupRule({groupRule: rule});
        rules.push(createdRule);
      }
    }
    const firstRule = rules[0];
    const secondRule = rules[1];
    const createdRuleIds = rules.map(rule => rule.id);

    // Activate first rule
    await client.groupApi.activateGroupRule({groupRuleId: firstRule.id});

    // 3a. List group rules
    const foundAllRules = await utils.waitTill(async () => {
      let foundRulesCnt = 0;
      await (await client.groupApi.listGroupRules()).each(rule => {
        if (createdRuleIds.includes(rule.id)) {
          foundRulesCnt++;
        }
      });
      return foundRulesCnt === createdRuleIds.length;
    });
    expect(foundAllRules).to.equal(true);

    // 3b. Search group rules with pagination
    const filteredRuleNames = new Set();
    const collection = await client.groupApi.listGroupRules({
      search: 'RULE_ABC',
      limit: 1
    });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(rule => {
      expect(filteredRuleNames.has(rule.name)).to.be.false;
      expect(rule.name.indexOf('RULE_ABC')).to.not.equal(-1);
      const doesMatch = [firstRule.name, secondRule.name].includes(rule.name);
      if (doesMatch) {
        filteredRuleNames.add(rule.name);
      }
    });
    expect(filteredRuleNames.size).to.equal(2);
    expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(2);

    // 4. Verify first rule executes
    // We wait for 30 seconds for the rule to activate i.e. userInGroup = true
    let userInGroup = await utils.waitTillUserInGroup(client, createdUser, createdGroup, true);
    expect(userInGroup).to.equal(true);

    // 4. Deactivate the rule and update it
    await client.groupApi.deactivateGroupRule({groupRuleId: firstRule.id});

    firstRule.name = `node-sdk: ${faker.random.word()}`;
    firstRule.conditions.expression.value = 'user.lastName=="incorrect"';
    const updatedRule = await client.groupApi.replaceGroupRule({groupRuleId: firstRule.id, groupRule: firstRule});
    await client.groupApi.activateGroupRule({groupRuleId: updatedRule.id});

    // Triggering the updated rule will remove the user from group i.e. userInGroup = false
    userInGroup = await utils.waitTillUserInGroup(client, createdUser, createdGroup, false);
    expect(userInGroup).to.equal(false);

    // 5. Delete the group, user and group rules
    await client.groupApi.deactivateGroupRule({groupRuleId: updatedRule.id});
    for (const rule of rules) {
      await client.groupApi.deleteGroupRule({groupRuleId: rule.id});
    }
    await utils.cleanup(client, createdUser, createdGroup);
  });
});
