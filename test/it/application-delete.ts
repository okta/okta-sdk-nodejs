import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';

import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete`;
}

const client = new okta.Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Application.delete()', () => {

  it('should allow me to delete the application', async () => {
    const application = utils.getBookmarkApplication();

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      await createdApplication.deactivate()
        .then(response => {
          expect(response.status).to.equal(200);
        });
      await createdApplication.delete()
        .then(response => {
          expect(response.status).to.equal(204);
          createdApplication = null;
        });
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});
