import { expect } from 'chai';

import utils = require('../utils');
import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete`;
}

const client = new Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.delete()', () => {

  it('should allow me to delete the application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      await client.applicationApi.deactivateApplication({ appId: createdApplication.id });
      const response = await client.applicationApi.deleteApplication({ appId: createdApplication.id });
      createdApplication = null;
      expect(response).to.be.undefined;
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id });
        await client.applicationApi.deleteApplication({ appId: createdApplication.id });
      }
    }
  });
});
