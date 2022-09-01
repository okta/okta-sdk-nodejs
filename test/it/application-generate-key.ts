import { expect } from 'chai';

import * as okta from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-generate-key`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe.skip('Application.generateApplicationKey()', () => {

  it('should allow me to generate keys for an application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      const applicationKey = await createdApplication.generateApplicationKey({
        validityYears: 2
      });
      expect(applicationKey).to.be.instanceof(okta.JsonWebKey);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });
});
