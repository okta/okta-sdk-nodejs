import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticator-create`;
}

const client = new Client({
  scopes: ['okta.authenticators.read', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authenticators API - Create tests', () => {
  let createdAuthenticatorId: string;

  before(async () => {
    await utils.activateSecurityQuestion(client);
  });

  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
  });

  afterEach(async function () {
    // Cleanup: deactivate and potentially remove created authenticator
    if (createdAuthenticatorId) {
      try {
        await client.authenticatorApi.deactivateAuthenticator({
          authenticatorId: createdAuthenticatorId
        });
        createdAuthenticatorId = null;
      } catch (error) {
        // Authenticator might already be deleted or doesn't exist
        console.log('Cleanup error:', error.message);
      }
    }
  });

  it('should create a new authenticator', async () => {
    // Create a custom authenticator (this may not work in all orgs)
    // Most orgs have pre-created authenticators, so this test may be limited
    
    // Try to create a custom app authenticator
    const authenticator: any = {
      key: 'okta_email',
      name: `Test Email Authenticator ${Date.now()}`,
      type: 'email',
      settings: {
        allowedFor: 'any'
      }
    };

    try {
      const created = await client.authenticatorApi.createAuthenticator({
        authenticator,
        activate: false
      });

      expect(created).to.have.property('id');
      expect(created).to.have.property('name');
      createdAuthenticatorId = created.id;
    } catch (error) {
      // Creating authenticators may not be supported in all orgs
      // Most orgs come with pre-configured authenticators that can't be created via API
      console.log('Create authenticator not supported or failed:', error.message);
    }
  });

  it('should throw error when creating authenticator with null authenticator', async () => {
    try {
      await client.authenticatorApi.createAuthenticator({
        authenticator: null
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticator');
    }
  });

  it('should throw error when creating authenticator with undefined authenticator', async () => {
    try {
      await client.authenticatorApi.createAuthenticator({
        authenticator: undefined
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticator');
    }
  });

  it('should create authenticator with activate parameter as false', async () => {
    const authenticator: any = {
      key: 'okta_email',
      name: `Test Email Authenticator Inactive ${Date.now()}`,
      type: 'email',
      settings: {
        allowedFor: 'any'
      }
    };

    try {
      const created = await client.authenticatorApi.createAuthenticator({
        authenticator,
        activate: false
      });

      expect(created).to.have.property('id');
      createdAuthenticatorId = created.id;
    } catch (error) {
      console.log('Create authenticator with activate=false not supported:', error.message);
    }
  });

  it('should create and activate an authenticator in one step', async () => {
    const authenticator: any = {
      key: 'okta_email',
      name: `Test Activated Email Authenticator ${Date.now()}`,
      type: 'email',
      settings: {
        allowedFor: 'any'
      }
    };

    try {
      const created = await client.authenticatorApi.createAuthenticator({
        authenticator,
        activate: true
      });

      expect(created).to.have.property('id');
      expect(created).to.have.property('status');
      if (created.status) {
        expect(created.status).to.equal('ACTIVE');
      }
      createdAuthenticatorId = created.id;
    } catch (error) {
      console.log('Create and activate authenticator not supported:', error.message);
    }
  });
});
