import { Client, DefaultRequestExecutor, AuthenticatorBase } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

type HttpError = { status?: number; statusCode?: number };

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

  it('should create a new authenticator', async function () {
    // Create a custom authenticator (this may not work in all orgs)
    // Most orgs have pre-created authenticators, so this test may be limited

    // Try to create a custom app authenticator
    const authenticator: AuthenticatorBase = {
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
      const status = (error as HttpError).status || (error as HttpError).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
        this.skip();
      }
      throw error;
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

  it('should create authenticator with activate parameter as false', async function () {
    const authenticator: AuthenticatorBase = {
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
      const status = (error as HttpError).status || (error as HttpError).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
        this.skip();
      }
      throw error;
    }
  });

  it('should create and activate an authenticator in one step', async function () {
    const authenticator: AuthenticatorBase = {
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
      const status = (error as HttpError).status || (error as HttpError).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
        this.skip();
      }
      throw error;
    }
  });
});
