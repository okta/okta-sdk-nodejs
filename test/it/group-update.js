const faker = require('faker');

const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/update-group`;
}

const client = new okta.Client({
  scopes: ['okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Group API tests', () => {
  it('should update a group', async () => {
    // 1. Create a new group
    let newGroup = {
      profile: {
        name: `node-sdk: Update test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. Update the group name and description
    createdGroup.profile.name = 'Update Test Group - Updated';
    createdGroup.profile.description = 'Description updated';

    const updatedGroup = await createdGroup.update();
    utils.validateGroup(updatedGroup, createdGroup);

    // 3. Delete the group
    await utils.cleanup(client, null, createdGroup);
  });
});
