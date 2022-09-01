import { expect } from 'chai';
import faker = require('@faker-js/faker');

import * as okta from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-group-assignment`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Application.getApplicationGroupAssignment()', () => {

  it('should allow me to get a group application assignment', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: `node-sdk: Application get Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.createApplication(application);
      createdGroup = await client.createGroup(group);
      const assignment = await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      await client.getApplicationGroupAssignment(createdApplication.id, createdGroup.id)
        .then(fetchedAssignment => {
          expect(fetchedAssignment.id).to.equal(assignment.id);
        });
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
      if (createdGroup) {
        await utils.cleanup(client, null, createdGroup);
      }
    }
  });
});
