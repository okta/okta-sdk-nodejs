import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import { Client, Collection } from '@okta/okta-sdk-nodejs';
import getMockApplication = require('./mocks/application-oidc');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-token`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

// As there is no way to create oauth2 token in test env
// Only test if list and revoke tokens endpoints get triggered and proper response get returned
describe('Application OAuth2 token API', () => {
  let application;
  beforeEach(async () => {
    application = await client.applicationApi.createApplication({application: getMockApplication()});
  });
  afterEach(async () => {
    await client.applicationApi.deactivateApplication({appId: application.id});
    await client.applicationApi.deleteApplication({appId: application.id});
  });

  it('should list a collection of tokens', async () => {
    const grants = await client.applicationApi.listOAuth2TokensForApplication({appId: application.id});
    expect(grants).to.be.instanceOf(Collection);
    const res = await grants.getNextPage();
    expect(res).to.be.an('array').that.is.empty;
  });

  it('should return status 204 when revoke tokens for application', async () => {
    const res = await client.applicationApi.revokeOAuth2TokensForApplication({appId: application.id});
    expect(res).to.be.undefined;
  });
});
