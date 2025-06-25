import { expect } from 'chai';

import utils = require('../utils');
import { ApiClient, Application, DefaultRequestExecutor, JsonWebKey } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-generate-key`;
}

const client = new ApiClient({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe.skip('Application.generateApplicationKey()', () => {

  it('should allow me to generate keys for an application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication: Application;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      const applicationKey = await client.applicationSSOCredentialKeyApi.generateApplicationKey({
        appId: createdApplication.id,
        validityYears: 2
      });
      expect(applicationKey).to.be.instanceof(JsonWebKey);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });
});
