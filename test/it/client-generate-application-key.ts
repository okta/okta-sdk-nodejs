import { expect } from 'chai';

import {
  ApiClient,
  DefaultRequestExecutor,
  JsonWebKey
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-generate-application-key`;
}

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe.skip('client.generateApplicationKey()', () => {

  it('should allow me to generate keys for an application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      const applicationKey = await client.applicationApi.generateApplicationKey({appId: createdApplication.id,
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
