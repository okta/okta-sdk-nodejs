import faker = require('@faker-js/faker');
import { expect } from 'chai';
import { spy } from 'sinon';
import utils = require('../utils');
import { ApiClient, Group, DefaultRequestExecutor, AddGroupRequest } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/search-groups`;
}

const client = new ApiClient({
  scopes: ['okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

const createTestGroups = async () => {
  const namePrefixes = [
    'GROUP_AB',
    'GROUP_XY'
  ];
  const createdGroups: Group[] = [];
  for (const prefix of namePrefixes) {
    for (let i = 0 ; i < 2 ; i++) {
      const groupName = `node-sdk: Search test Group ${prefix} ${i} ${faker.random.word()}`.substring(0, 49);
      const newGroup: AddGroupRequest = {
        profile: {
          name: groupName
        },
      };
      await utils.cleanup(client, null, newGroup);
      const createdGroup = await client.groupApi.addGroup({group: newGroup});
      utils.validateGroup(createdGroup, newGroup);
      createdGroups.push(createdGroup);
    }
  }
  return createdGroups;
};

describe('Group API tests', () => {
  let createdGroups: Group[];
  before(async () => {
    createdGroups = await createTestGroups();
  });
  after(async () => {
    await utils.cleanup(client, null, createdGroups);
  });

  it('should paginate results', async () => {
    const listIds = new Set();
    const collection = await client.groupApi.listGroups({
      limit: 2
    });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(async group => {
      expect(group).to.be.an.instanceof(Group);
      expect(listIds.has(group.id)).to.be.false;
      listIds.add(group.id);
    });
    expect(listIds.size).to.be.greaterThanOrEqual(4);
    expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(2);
  });

  // Pagination does not work with q
  it('should search by name with q', async () => {
    const q = 'node-sdk: Search test Group GROUP_AB';
    const collection = await client.groupApi.listGroups({
      q
    });
    const filtered = new Set();
    await collection.each(async group => {
      expect(group).to.be.an.instanceof(Group);
      expect(group.profile.name).to.match(new RegExp(q));
      filtered.add(group.profile.name);
    });
    expect(filtered.size).to.equal(2);
  });

  it('should filter with search and paginate results', async () => {
    const filtered = new Set();
    const q = 'node-sdk: Search test Group GROUP_XY';
    const collection = await client.groupApi.listGroups({
      search: `type eq "OKTA_GROUP" AND profile.name sw "${q}"`,
      limit: 1
    });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(async group => {
      expect(group).to.be.an.instanceof(Group);
      filtered.add(group.profile.name);
    });
    expect(filtered.size).to.equal(2);
    expect(pageSpy.getCalls().length).to.equal(2);
  });
});
