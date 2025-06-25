import { expect } from 'chai';

import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-list-keys`;
}

const client = new ApiClient({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.getApplicationKey() / Application.listKeys()', () => {

  it('should allow me to get and list keys for an application', async () => {
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
