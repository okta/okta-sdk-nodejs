import { expect } from 'chai';
import faker = require('@faker-js/faker');

import { Client, Application, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-update-application`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.updateApplication()', () => {

  it('should allow me to get an application by ID', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication: Application;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});

      const updatedLabel = faker.random.word();
      createdApplication.label = updatedLabel;
      await client.applicationApi.replaceApplication({appId: createdApplication.id, application: createdApplication});
      expect(createdApplication.label).to.equal(updatedLabel);
      const fetchedApplication = await client.applicationApi.getApplication({appId: createdApplication.id});
      expect(fetchedApplication.label).to.equal(updatedLabel);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });

});
