import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import { Collection } from '@okta/okta-sdk-nodejs';
import getMockApplication = require('./mocks/application-oidc');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-token`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

// As there is no way to create oauth2 token in test env
// Only test if list and revoke tokens endpoints get triggered and proper response get returned
describe('Application OAuth2 token API', () => {
  let application;
  beforeEach(async () => {
    application = await client.createApplication(getMockApplication());
  });
  afterEach(async () => {
    await application.deactivate();
    await application.delete();
  });

  it('should list a collection of tokens', async () => {
    const grants = await application.listOAuth2Tokens();
    expect(grants).not.to.equal(null);
    // const res = await grants.getNextPage();
    // expect(res).to.be.an('array').that.is.empty;
  });

  it('should return status 204 when revoke tokens for application', async () => {
    const res = await application.revokeOAuth2Tokens();
    expect(res.status).to.equal(204);
  });
});
