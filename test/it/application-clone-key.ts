import { expect } from 'chai';

import * as okta from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-clone-key`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
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
      createdApplication = await client.createApplication(application);
      createdApplication2 = await client.createApplication(application2);
      const generatedKey = await createdApplication.generateApplicationKey({
        validityYears: 2
      });

      const clonedKey = await createdApplication.cloneApplicationKey(generatedKey.kid, {
        targetAid: createdApplication2.id
      });
      expect(clonedKey).to.be.instanceof(okta.JsonWebKey);
      expect(clonedKey.kid).to.equal(generatedKey.kid);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
      if (createdApplication2) {
        await client.deactivateApplication(createdApplication2.id);
        await client.deleteApplication(createdApplication2.id);
      }
    }
  });
});
