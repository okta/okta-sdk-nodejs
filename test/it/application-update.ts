import { expect } from 'chai';
import faker = require('@faker-js/faker');

import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-update`;
}

const client = new ApiClient({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.update()', () => {

  it('should allow me to update the application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});

      const updatedLabel = faker.random.word();
      createdApplication.label = updatedLabel;
      await client.applicationApi.replaceApplication({appId: createdApplication.id, application: createdApplication})
        .then(response => {
          expect(response.label).to.equal(updatedLabel);
        });

    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });

});
