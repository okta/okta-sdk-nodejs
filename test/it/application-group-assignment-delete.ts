import { expect } from 'chai';
import faker = require('@faker-js/faker');

import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete-group-assignment`;
}

const client = new ApiClient({
  scopes: ['okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('ApplicationGroupAssignment.delete(:appId)', () => {

  it('should allow me to delete the group assignment', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: `node-sdk: Application delete Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.applicationApi.createApplication({application});
      createdGroup = await client.groupApi.addGroup({group});
      await client.applicationApi.assignGroupToApplication({appId: createdApplication.id, groupId: createdGroup.id});
      const response = await client.applicationApi.unassignApplicationFromGroup({appId: createdApplication.id, groupId: createdGroup.id});
      expect(response).to.be.undefined;
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
      if (createdGroup) {
        await utils.cleanup(client, null, createdGroup);
      }
    }
  });
});
