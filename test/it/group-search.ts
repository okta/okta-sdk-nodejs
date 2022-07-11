import faker = require('@faker-js/faker');

import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/search-groups`;
}

const client = new okta.Client({
  scopes: ['okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

const namePrefixes = [
  'GROUP_AB',
  'GROUP_XY'
];

const createTestGroups = async () => {
  const createdGroups = [];
  for (const prefix of namePrefixes) {
    for (let i = 0 ; i < 2 ; i++) {
      const groupName = `node-sdk: Search test Group ${prefix} ${i} ${faker.random.word()}`.substring(0, 49);
      const newGroup = {
        profile: {
          name: groupName
        },
      };
      await utils.cleanup(client, null, newGroup);
      const createdGroup = await client.createGroup(newGroup as okta.v3.Group);
      utils.validateGroup(createdGroup, newGroup);
      createdGroups.push(createdGroup);
    }
  }
  return createdGroups;
};

describe('Group API tests', () => {
  // TODO: OKTA-512396 - Filter works only as "starts with". Pagination does not work with filter
  it('should search for groups by name', async () => {
    // 1. Create new groups
    const createdGroups = await createTestGroups();

    // 2. Search groups by name
    for (const prefix of namePrefixes) {
      const q = `node-sdk: Search test Group ${prefix}`;
      const collection = await client.listGroups({ q });
      let filtered = new Set();
      await collection.each(async group => {
        expect(group).to.be.an.instanceof(okta.v3.Group);
        expect(group.profile.name).to.match(new RegExp(q));
        filtered.add(group.profile.name);
      });
      expect(filtered.size).to.equal(2);
    }

    // 3. Delete groups
    await utils.cleanup(client, null, createdGroups);
  });

  it('should paginate results', async () => {
    // 1. Create new groups
    const createdGroups = await createTestGroups();

    // 2. List with pagination
    let listIds = new Set();
    const collection = await client.listGroups({ limit: 2 });
    await collection.each(async group => {
      expect(group).to.be.an.instanceof(okta.v3.Group);
      expect(listIds.has(group.id)).to.be.false;
      listIds.add(group.id);
    });
    expect(listIds.size).to.be.greaterThanOrEqual(4);

    // 3. Delete groups
    await utils.cleanup(client, null, createdGroups);
  });

  it('should search for the given group', async () => {
    // 1. Create a new group
    const groupName = `node-sdk: Search test Group ${faker.random.word()}`.substring(0, 49);
    const newGroup = {
      profile: {
        name: groupName
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. Search the group by name
    const queryParameters = { q : groupName };
    const groupPresent = await utils.isGroupPresent(client, createdGroup, queryParameters);
    expect(groupPresent).to.equal(true);

    // 3. Delete the group
    await utils.cleanup(client, null, createdGroup);
  });
});
