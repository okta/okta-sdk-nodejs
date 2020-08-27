const faker = require('faker');

const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
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

describe('Group API tests', () => {
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
    let queryParameters = { q : groupName };
    let groupPresent = await utils.isGroupPresent(client, createdGroup, queryParameters);
    expect(groupPresent).to.equal(true);

    // 3. Delete the group
    await utils.cleanup(client, null, createdGroup);
  });
});
