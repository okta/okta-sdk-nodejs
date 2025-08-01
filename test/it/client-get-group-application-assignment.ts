import { expect } from 'chai';
import faker = require('@faker-js/faker');

import {
  ApplicationGroupAssignment,
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application-group-assignment`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.getApplicationGroupAssignment()', () => {

  it('should allow me to get a group-application assignment', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: `node-sdk: Application client get group ${faker.random.word()}`.substring(0, 49)
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.applicationApi.createApplication({application});
      createdGroup = await client.groupApi.createGroup({group});
      await client.applicationApi.assignGroupToApplication({appId: createdApplication.id, groupId: createdGroup.id, applicationGroupAssignment: {}});
      const assignment = await client.applicationApi.getApplicationGroupAssignment({appId: createdApplication.id, groupId: createdGroup.id});
      expect(assignment).to.be.instanceof(ApplicationGroupAssignment);
      const appLink = assignment._links.app;
      const groupLink = assignment._links.group;
      expect(appLink.href).to.contain(createdApplication.id);
      expect(groupLink.href).to.contain(createdGroup.id);
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
