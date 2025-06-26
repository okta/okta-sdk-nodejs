import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';

import utils = require('../utils');
import { ApiClient } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-activate-application`;
}

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.activateApplication()', () => {

  it('should allow me to activate an application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      await client.applicationApi.deactivateApplication({appId: createdApplication.id});
      let fetchedApplication = await client.applicationApi.getApplication({appId: createdApplication.id});
      expect(fetchedApplication.status).to.equal('INACTIVE');
      await client.applicationApi.activateApplication({appId: createdApplication.id});
      fetchedApplication = await client.applicationApi.getApplication({appId: createdApplication.id});
      expect(fetchedApplication.status).to.equal('ACTIVE');
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });
});
