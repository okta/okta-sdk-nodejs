import { expect } from 'chai';

import { Application, ApplicationFeature, Client } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-features`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Application API: applicaton features', () => {
  let application: Application;
  beforeEach(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getOrg2OrgApplicationOptions() as Application
    });
  });

  afterEach(async () => {
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
  });

  // application features tests require provisioning connection to be enabled
  xit('lists application features', async () => {
    const features: ApplicationFeature[] = [];
    for await (const feature of (await client.applicationApi.listFeaturesForApplication({appId: application.id}))) {
      features.push(feature);
    }
    expect(features.length).to.be.greaterThanOrEqual(1);
  });

  xit('gets application feature', async () => {
    const feature = await client.applicationApi.getFeatureForApplication({appId: application.id, name: 'USER_PROVISIONING'});
    expect(feature.name).to.equal('USER_PROVISIONING');
  });

  xit('updates application feature', async () => {
    let feature = await client.applicationApi.updateFeatureForApplication({appId: application.id, name: 'USER_PROVISIONING',
      capabilitiesObject: {
        update: {
          lifecycleDeactivate: {
            status: 'DISABLED'
          }
        },
        importRules: {},
        importSettings: {}
      }
    });
    expect(feature.status).to.equal('DISABLED');
    feature = await client.applicationApi.updateFeatureForApplication({appId: application.id, name: 'USER_PROVISIONING',
      capabilitiesObject: {
        update: {
          lifecycleDeactivate: {
            status: 'ENABLED'
          }
        },
        importRules: {},
        importSettings: {}
      }
    });
    expect(feature.status).to.equal('ENABLED');
  });

  it('provides method for uploading application logo', async () => {
    const file = utils.getMockImage('logo.png');
    const response = await client.applicationApi.uploadApplicationLogo({
      appId: application.id,
      file: {
        data: file,
        name: 'logo.png'
      }
    });
    expect(response).to.equal(undefined);
  });
});
