import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  SamlApplication,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application SSO', () => {
  let application: SamlApplication;

  before(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getSamlApplication()
    });
  });

  after(async () => {
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
  });

  it('Preview SAML metadata', async () => {
    const samlMetadata = await client.applicationApi.previewSAMLmetadataForApplication({
      appId: application.id,
      kid: application.credentials.signing.kid,
    });
    expect(samlMetadata).to.include('<?xml');
  });
});
