import { expect } from 'chai';

import utils = require('../utils');
import { Client, v3, ProvisioningConnectionAuthScheme, ProvisioningConnectionStatus } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-provisioning-connection`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Application API: provisioning connection for application', () => {
  let application: v3.BookmarkApplication;

  beforeEach(async () => {
    application = await client.createApplication(utils.getBookmarkApplication());
  });

  afterEach(async () => {
    if (application) {
      await client.deactivateApplication(application.id);
      await client.deleteApplication(application.id);
    }
  });

  it('provides method for getting default provisioning connection', async () => {
    const provisioningConnection = await client.getDefaultProvisioningConnectionForApplication(application.id);
    expect(provisioningConnection.status).to.equal(ProvisioningConnectionStatus.DISABLED);
    expect(provisioningConnection.authScheme).to.equal(ProvisioningConnectionAuthScheme.TOKEN);
  });

  it('provides methods for activating and deactivating default provisioning connection', async () => {
    try {
      const response = await client.activateDefaultProvisioningConnectionForApplication(application.id);
      expect(response).to.be.undefined;
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.message).to.contain('Api validation failed: credential. Verification failed: Invalid URL. Not authorized.');
    }

    const response = await client.deactivateDefaultProvisioningConnectionForApplication(application.id);
    expect(response).to.be.undefined;
    const provisioningConnection = await client.getDefaultProvisioningConnectionForApplication(application.id);
    expect(provisioningConnection.status).to.equal(ProvisioningConnectionStatus.DISABLED);
  });

  it('provides method for creating provisioning connection for application', async () => {
    try {
      await client.setDefaultProvisioningConnectionForApplication(application.id, {
        profile: {
          authScheme: ProvisioningConnectionAuthScheme.TOKEN,
          token: 'testToken'
        }
      });
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.message).to.contain('Api validation failed: credential. Verification failed: Invalid URL. Not authorized.');
    }
  });
});
