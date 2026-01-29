import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  OpenIdConnectApplication,
  OAuth2ClientSecret,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

describe('ApplicationSSOCredentialOAuth2ClientAuthApi', () => {
  let application: OpenIdConnectApplication;

  before(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getOIDCApplication()
    }) as OpenIdConnectApplication;
  });

  after(async () => {
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
  });
});
