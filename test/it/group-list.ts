import faker = require('@faker-js/faker');

import { expect } from 'chai';
import utils = require('../utils');
import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/list-groups`;
}

const client = new Client({
  scopes: ['okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Group API tests', () => {
  it('should list the groups and find the created group', async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: `node-sdk: List test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.groupApi.createGroup({group: newGroup});
    utils.validateGroup(createdGroup, newGroup);

    // 2. List all groups and find the group created
    const groupPresent =  await utils.isGroupPresent(client, createdGroup);
    expect(groupPresent).to.equal(true);

    // 3. Delete the group
    await client.groupApi.deleteGroup({groupId: createdGroup.id});
  });
});
