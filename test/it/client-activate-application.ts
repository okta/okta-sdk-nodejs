import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-activate-application`;
}

const client: V2Client = utils.getV2Client({
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
      createdApplication = await client.createApplication(application);
      await client.deactivateApplication(createdApplication.id);
      let fetchedApplication = await client.getApplication(createdApplication.id);
      expect(fetchedApplication.status).to.equal('INACTIVE');
      await client.activateApplication(createdApplication.id);
      fetchedApplication = await client.getApplication(createdApplication.id);
      expect(fetchedApplication.status).to.equal('ACTIVE');
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });
});
