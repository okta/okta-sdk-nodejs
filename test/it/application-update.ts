import { expect } from 'chai';
import faker = require('faker');

import * as okta from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-update`;
}

const client = new okta.Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Application.update()', () => {

  it('should allow me to update the application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);

      const updatedLabel = faker.random.word();
      createdApplication.label = updatedLabel;
      await createdApplication.update()
        .then(response => {
          expect(response.label).to.equal(updatedLabel);
        });

    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

});
