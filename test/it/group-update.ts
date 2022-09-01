import faker = require('@faker-js/faker');

import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/update-group`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Group API tests', () => {
  let group;
  beforeEach(async () => {
    // 1. Create a new group
    const newGroup = {
      profile: {
        name: `node-sdk: Update test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    group = await client.createGroup(newGroup);
    utils.validateGroup(group, newGroup);
  });

  afterEach(async () => {
    await client.deleteGroup(group.id);
  });

  it('should update a group', async () => {
    group.profile.name = 'Update Test Group - Updated';
    group.profile.description = 'Description updated';

    // const updatedGroup = await group.update();
    const updatedGroup = await client.updateGroup(group.id, group);
    utils.validateGroup(updatedGroup, group);
  });
});
