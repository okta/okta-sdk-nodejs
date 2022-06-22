import { expect } from 'chai';
import faker = require('@faker-js/faker');

import * as okta from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-update-application`;
}

const client = new okta.Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.updateApplication()', () => {

  it('should allow me to get an application by ID', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);

      const updatedLabel = faker.random.word();
      createdApplication.label = updatedLabel;
      await client.updateApplication(createdApplication.id, createdApplication);
      expect(createdApplication.label).to.equal(updatedLabel);
      const fetchedApplication = await client.getApplication(createdApplication.id);
      expect(fetchedApplication.label).to.equal(updatedLabel);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

});
