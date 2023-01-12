import { expect } from 'chai';

import utils = require('../utils');
import { Client, SamlApplication } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-provisioning-connection`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Application API: provisioning connection for application', () => {
  let application: SamlApplication;

  beforeEach(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getOrg2OrgApplicationOptions()
    });
  });

  afterEach(async () => {
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
  });

  it('provides method for getting default provisioning connection', async () => {
    const provisioningConnection = await client.applicationApi.getDefaultProvisioningConnectionForApplication({
      appId: application.id
    });
    expect(provisioningConnection.status).to.equal('DISABLED');
    expect(provisioningConnection.authScheme).to.equal('TOKEN');
  });

  it('provides methods for activating and deactivating default provisioning connection', async () => {
    try {
      const response = await client.applicationApi.activateDefaultProvisioningConnectionForApplication({
        appId: application.id
      });
      expect(response).to.be.undefined;
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.message).to.contain('Api validation failed: credential. Verification failed: Invalid URL. Not authorized.');
    }

    const response = await client.applicationApi.deactivateDefaultProvisioningConnectionForApplication({
      appId: application.id
    });
    expect(response).to.be.undefined;
    const provisioningConnection = await client.applicationApi.getDefaultProvisioningConnectionForApplication({
      appId: application.id
    });
    expect(provisioningConnection.status).to.equal('DISABLED');
  });

  it('provides method for creating provisioning connection for application', async () => {
    try {
      await client.applicationApi.updateDefaultProvisioningConnectionForApplication({
        appId: application.id,
        ProvisioningConnectionRequest: {
          profile: {
            authScheme: 'TOKEN',
            token: 'testToken'
          }
        }
      });
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.message).to.contain('Api validation failed: credential. Verification failed: Invalid URL. Not authorized.');
    }
  });
});
