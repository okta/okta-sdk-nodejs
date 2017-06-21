const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/update-group`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group API tests', () => {
  it('should update a group', async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: 'Update Test Group'
      }
    };

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. Update the group name and description
    const updateGroup = {
      profile: {
        name: 'Update Test Group - Updated',
        description: 'Description updated',
      }
    };

    const updatedGroup = await client.updateGroup(createdGroup.id, updateGroup);
    utils.validateGroup(updatedGroup, updateGroup);

    // 3. Delete the group
    await client.deleteGroup(createdGroup.id);
  });
});
