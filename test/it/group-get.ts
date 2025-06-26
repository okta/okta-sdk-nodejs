import faker = require('@faker-js/faker');

import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { ApiClient } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-get`;
}

const client = new ApiClient({
  scopes: ['okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Group API tests', () => {
  it('should get the group by ID', async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: `node-sdk: Get test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.groupApi.addGroup({group: newGroup});
    utils.validateGroup(createdGroup, newGroup);

    // 2. Get the group by ID
    const group = await client.groupApi.getGroup({groupId: createdGroup.id});
    utils.validateGroup(group, createdGroup);

    // 3. Delete the group
    await client.groupApi.deleteGroup({groupId: createdGroup.id});

    // 4. Verify group was deleted
    let err;
    try {
      await client.groupApi.getGroup({groupId: createdGroup.id});
    } catch (e) {
      err = e;
    } finally {
      expect(err, 'Group was not deleted').to.exist;
      expect(err.message).to.contain('Okta HTTP 404');
    }
  });
});
