import { expect } from 'chai';
import faker = require('@faker-js/faker');

import {
  Client,
  DefaultRequestExecutor,
  ApplicationGroupAssignment } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-application-group-assignments`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
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
      await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id, {});
      await client.listApplicationGroupAssignments(createdApplication.id).each(async (assignment) => {
        // there should be only one assignment
        expect(assignment).to.be.instanceof(ApplicationGroupAssignment);
        const appLink = assignment._links.app as Record<string, string>;
        const groupLink = assignment._links.group as Record<string, string>;
        expect(appLink.href).to.contain(createdApplication.id);
        expect(groupLink.href).to.contain(createdGroup.id);
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
