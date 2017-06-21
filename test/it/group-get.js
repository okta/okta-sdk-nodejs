const utils = require('../utils');
const okta = require('../../');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-get-and-stats`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group API tests', () => {
  it('should get the group by ID & group stats', async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: 'Get Test Group'
      }
    };

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. Get the group by ID
    const group = await client.getGroup(createdGroup.id);
    utils.validateGroup(group, createdGroup);

    // 3. Get group stats
    const stats = await createdGroup.getStats();
    expect(stats.usersCount).to.equal(0);
    expect(stats.appsCount).to.equal(0);
    expect(stats.groupPushMappingsCount).to.equal(0);

    // 4. Delete the group
    await client.deleteGroup(createdGroup.id);
  });
});
