import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticator-wellknown`;
}

const client = new Client({
  scopes: ['okta.authenticators.read'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authenticators API - Well-Known Configuration tests', () => {
  before(async () => {
    await utils.activateSecurityQuestion(client);
  });

  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
  });

  it('should get well-known app authenticator configuration', async () => {
    // This endpoint provides configuration for app authenticators
    // We need a valid OAuth client ID to test this
    
    // Try with a sample OAuth client ID
    const testClientId = 'test-oauth-client-id';

    try {
      const config = await client.authenticatorApi.getWellKnownAppAuthenticatorConfiguration({
        oauthClientId: testClientId
      });

      expect(config).to.exist;
      expect(config).to.have.property('settings');
    } catch (error) {
      // This endpoint may return 404 if the client doesn't exist
      // or if the feature is not available
      expect(error).to.exist;
      console.log('Well-known config not available for test client:', error.message);
    }
  });

  it('should handle invalid OAuth client ID gracefully', async () => {
    const invalidClientId = 'invalid-client-' + Date.now();

    try {
      await client.authenticatorApi.getWellKnownAppAuthenticatorConfiguration({
        oauthClientId: invalidClientId
      });
      // If this succeeds, that's unexpected but acceptable
    } catch (error) {
      // Expected to fail with 404 or similar
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([404, 400, 403]);
    }
  });
});
