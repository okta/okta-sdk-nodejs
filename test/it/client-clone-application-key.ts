import { expect } from 'chai';

import {
  ApplicationSignOnMode,
  ApiClient,
  DefaultRequestExecutor,
  JsonWebKey,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-clone-application-key`;
}

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe.skip('client.cloneApplicationKey()', () => {

  it('should allow me to clone a key from one app to another app', async () => {
    const application = utils.getBookmarkApplication();

    const application2 = {
      name: 'bookmark',
      label: 'node-sdk: my bookmark app 2',
      signOnMode: 'BOOKMARK' as ApplicationSignOnMode,
      settings: {
        app: {
          requestIntegration: false,
          url: 'https://example.com/bookmark.htm'
        }
      }
    };

    let createdApplication;
    let createdApplication2;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.removeAppByLabel(client, application2.label);
      createdApplication = await client.applicationApi.createApplication({application});
      createdApplication2 = await client.applicationApi.createApplication({application: application2});
      const generatedKey = await client.applicationApi.generateApplicationKey({appId: createdApplication.id,
        validityYears: 2
      });

      const clonedKey = await client.applicationApi.cloneApplicationKey({appId: createdApplication.id, keyId: generatedKey.kid,
        targetAid: createdApplication2.id
      });
      expect(clonedKey).to.be.instanceof(JsonWebKey);
      expect(clonedKey.kid).to.equal(generatedKey.kid);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
      if (createdApplication2) {
        await client.applicationApi.deactivateApplication({appId: createdApplication2.id});
        await client.applicationApi.deleteApplication({appId: createdApplication2.id});
      }
    }
  });
});
