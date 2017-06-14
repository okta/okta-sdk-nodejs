const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-crud-operations`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Group API tests', () => {
  it('should implement the CRUD operations for Group APIs', async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: 'Group API Test Group'
      }
    };

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. Get the group by ID
    const group = await client.getGroup(createdGroup.id);
    utils.validateGroup(group, createdGroup);

    // 3. List all groups and find the group created
    let groupPresent =  await utils.isGroupPresent(client, group);
    expect(groupPresent).to.equal(true);

    // 4. Search the group by name
    let queryParameters = { q : 'Group API' };
    groupPresent = await utils.isGroupPresent(client, group, queryParameters);
    expect(groupPresent).to.equal(true);

    // 5. Filter the group by type
    queryParameters = { filter : 'type eq \"OKTA_GROUP\"', limit : '200' };
    groupPresent = await utils.isGroupPresent(client, group, queryParameters);
    expect(groupPresent).to.equal(true);

    // 6. Update the group name and description
    const updateGroup = {
      profile: {
        name: 'SDK Test Group - Updated',
        description: 'Description updated',
      }
    };

    const updatedGroup = await client.updateGroup(createdGroup.id, updateGroup);
    utils.validateGroup(updatedGroup, updateGroup);

    // 7. Delete the group
    await client.deleteGroup(createdGroup.id);
  });

});
