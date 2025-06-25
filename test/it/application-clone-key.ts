import { expect } from 'chai';

import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor, JsonWebKey } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-clone-key`;
}

const client = new ApiClient({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe.skip('Application.cloneApplicationKey()', () => {

  it('should allow me to clone a key from one app to another app', async () => {
    const application = utils.getBookmarkApplication();
    const application2 = utils.getBookmarkApplication();

    let createdApplication;
    let createdApplication2;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.removeAppByLabel(client, application2.label);
      createdApplication = await client.applicationApi.createApplication({application});
      createdApplication2 = await client.applicationApi.createApplication({application: application2});
      const generatedKey = await client.applicationApi.generateApplicationKey({
        appId: createdApplication.id,
        validityYears: 2
      });

      const clonedKey = await client.applicationApi.cloneApplicationKey({
        appId: createdApplication.id,
        keyId: generatedKey.kid,
        targetAid: createdApplication2.id
      });
      expect(clonedKey).to.be.instanceof(JsonWebKey);
      expect(clonedKey.kid).to.equal(generatedKey.kid);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({ appId: createdApplication.id });
        await client.applicationApi.deleteApplication({ appId: createdApplication.id });
      }
      if (createdApplication2) {
        await client.applicationApi.deactivateApplication({ appId: createdApplication2.id });
        await client.applicationApi.deleteApplication({ appId: createdApplication2.id });
      }
    }
  });
});
