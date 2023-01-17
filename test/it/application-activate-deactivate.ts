import { expect } from 'chai';

import utils = require('../utils');
import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-activate-deactivate`;
}

const client = new Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.activate() / Application.deactivate()', () => {

  it('should allow me to activate/deactivate the application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      await client.applicationApi.deactivateApplication({appId: createdApplication.id});
      await client.applicationApi.getApplication({appId: createdApplication.id})
        .then(application => {
          expect(application.status).to.equal('INACTIVE');
        });
      await client.applicationApi.activateApplication({appId: createdApplication.id});
      await client.applicationApi.getApplication({appId: createdApplication.id})
        .then(application => {
          expect(application.status).to.equal('ACTIVE');
        });
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });
});
