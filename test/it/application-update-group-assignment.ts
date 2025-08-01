import { expect } from 'chai';
import faker = require('@faker-js/faker');

import utils = require('../utils');
import { Client, DefaultRequestExecutor, Application, Group } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-update-group-assignment`;
}

const client = new Client({
  scopes: ['okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.createApplicationGroupAssignment()', () => {

  it('should allow me to assign a group to an application', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: `node-sdk: Application assign Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    let createdApplication: Application;
    let createdGroup: Group;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.applicationApi.createApplication({application});
      createdGroup = await client.groupApi.createGroup({group});
      const assignment = await client.applicationApi.assignGroupToApplication({appId: createdApplication.id, groupId: createdGroup.id});
      expect(assignment._links.group.href).to.contain(createdGroup.id);
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
