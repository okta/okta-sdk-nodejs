import { expect } from 'chai';

import {
  ApiClient,
  DefaultRequestExecutor,
  JsonWebKey,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application-key`;
}

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.getApplicationKey()', () => {

  it('should allow me to get an application key for an application', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      const applicationKeys = await client.applicationApi.listApplicationKeys({appId: createdApplication.id});
      await applicationKeys.each(async (key) => {
        const fetchedKey = await client.applicationApi.getApplicationKey({appId: createdApplication.id, keyId: key.kid});
        expect(fetchedKey).to.be.instanceof(JsonWebKey);
        expect(fetchedKey.kid).to.equal(key.kid);
      });
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });
});
