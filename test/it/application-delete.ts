import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';

import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete`;
}

const client = new okta.Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Application.delete()', () => {

  it('should allow me to delete the application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      await client.deactivateApplication(createdApplication.id);
      const response = await client.deleteApplication(createdApplication.id);
      createdApplication = null;
      expect(response).to.be.undefined;
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });
});
