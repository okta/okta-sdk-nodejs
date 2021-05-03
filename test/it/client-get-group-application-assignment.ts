import { expect } from 'chai';
import faker = require('faker');

import * as okta from '@okta/okta-sdk-nodejs';
import models = require('../../src/models');
import utils = require('../utils');
import { Application } from '../../src/types/models/Application';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application-group-assignment`;
}

const client = new okta.Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
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
      createdApplication = await client.createApplication(application);
      createdGroup = await client.createGroup(group);
      await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id, {});
      const assignment = await client.getApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      expect(assignment).to.be.instanceof(models.ApplicationGroupAssignment);
      const appLink = assignment._links.app as Record<string, string>;
      const groupLink = assignment._links.group as Record<string, string>;
      expect(appLink.href).to.contain(createdApplication.id);
      expect(groupLink.href).to.contain(createdGroup.id);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
      if (createdGroup) {
        await utils.cleanup(client, null, createdGroup);
      }
    }
  });

});
