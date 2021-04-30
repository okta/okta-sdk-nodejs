import { expect } from 'chai';
import faker = require('faker');

import * as okta from '@okta/okta-sdk-nodejs';
import models = require('../../src/models');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-application-group-assignments`;
}

const client = new okta.Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.listApplicationGroupAssignments()', () => {

  it('should allow me to list an applications group assignments', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: `node-sdk: Application list group ${faker.random.word()}`.substring(0, 49)
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.createApplication(application);
      createdGroup = await client.createGroup(group);
      await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      await client.listApplicationGroupAssignments(createdApplication.id).each(async (assignment) => {
        // there should be only one assignment
        expect(assignment).to.be.instanceof(models.ApplicationGroupAssignment);
        expect(assignment._links.app.href).to.contain(createdApplication.id);
        expect(assignment._links.group.href).to.contain(createdGroup.id);
      });

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
