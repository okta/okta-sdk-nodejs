import { expect } from 'chai';

import {
  BookmarkApplication,
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.getApplication()', () => {

  it('should allow me to get an application by ID', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.applicationApi.createApplication({application});
      const fetchedApplication = await client.applicationApi.getApplication({appId: createdApplication.id}) as BookmarkApplication;
      expect(fetchedApplication.id).to.equal(createdApplication.id);
      expect(fetchedApplication).to.be.instanceof(BookmarkApplication);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
    }
  });

});
