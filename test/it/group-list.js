const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/list-groups`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group API tests', () => {
  it('should list the groups and find the created group', async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: 'List Test Group'
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. List all groups and find the group created
    let groupPresent =  await utils.isGroupPresent(client, createdGroup);
    expect(groupPresent).to.equal(true);

    // 3. Delete the group
    await utils.cleanup(client, null, createdGroup);
  });
});
