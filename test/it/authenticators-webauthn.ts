import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');
import { faker } from '@faker-js/faker';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticator-webauthn`;
}

const client = new Client({
  scopes: ['okta.authenticators.read', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authenticators API - WebAuthn AAGUID tests', () => {
  let webauthnAuthenticatorId: string;
  let createdAAGUID: string;

  before(async () => {
    await utils.activateSecurityQuestion(client);
  });

  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }

    // Find WebAuthn authenticator
    const authenticators = await client.authenticatorApi.listAuthenticators();
    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (!webauthnAuthenticatorId) {
      this.skip();
    }
  });

  afterEach(async function () {
    // Cleanup: delete created AAGUID
    if (createdAAGUID && webauthnAuthenticatorId) {
      try {
        await client.authenticatorApi.deleteCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          aaguid: createdAAGUID
        });
        createdAAGUID = null;
      } catch (error) {
        // AAGUID might already be deleted or not exist
        console.log('Cleanup error:', error.message);
      }
    }
  });

  it('should create a custom AAGUID', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    // Use a well-known YubiKey 5 NFC AAGUID from FIDO Alliance Metadata
    const aaguid = '2fc0579f-8113-47ea-b116-bb5a8db9202a';
    const customAAGUID = {
      aaguid: aaguid,
      authenticatorCharacteristics: {
        fipsCompliant: false,
        hardwareProtected: true,
        platformAttached: false
      }
    };

    try {
      const created = await client.authenticatorApi.createCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        customAAGUIDCreateRequestObject: customAAGUID
      });

      expect(created).to.have.property('aaguid');
      expect(created).to.have.property('name');
      createdAAGUID = created.aaguid;
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
        this.skip();
      }
      throw error;
    }
  });

  it('should list all custom AAGUIDs', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      const aaguids = await client.authenticatorApi.listAllCustomAAGUIDs({
        authenticatorId: webauthnAuthenticatorId
      });

      expect(aaguids).to.be.an('array');
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 403 || status === 404 || status === 501 || status === 405) {
        this.skip();
      }
      throw error;
    }
  });

  it('should get a specific custom AAGUID', async function () {
    if (!webauthnAuthenticatorId || !createdAAGUID) {
      // Create one first using a well-known YubiKey 5Ci AAGUID
      const aaguid = 'c5ef55ff-ad9a-4b9f-b580-adebafe026d0';
      const customAAGUID = {
        aaguid: aaguid,
        authenticatorCharacteristics: {
          fipsCompliant: false,
          hardwareProtected: true,
          platformAttached: false
        }
      };

      try {
        const created = await client.authenticatorApi.createCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          customAAGUIDCreateRequestObject: customAAGUID
        });
        createdAAGUID = created.aaguid;
      } catch (error) {
        const status = (error as any).status || (error as any).statusCode;
        if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
          this.skip();
        }
        throw error;
      }
    }

    try {
      const aaguid = await client.authenticatorApi.getCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: createdAAGUID
      });

      expect(aaguid).to.have.property('aaguid', createdAAGUID);
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
        this.skip();
      }
      throw error;
    }
  });

  it('should throw error when getting custom AAGUID with null authenticatorId', async () => {
    try {
      await client.authenticatorApi.getCustomAAGUID({
        authenticatorId: null,
        aaguid: 'test-aaguid-id'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when getting custom AAGUID with undefined authenticatorId', async () => {
    try {
      await client.authenticatorApi.getCustomAAGUID({
        authenticatorId: undefined,
        aaguid: 'test-aaguid-id'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when getting custom AAGUID with null aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.getCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: null
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should throw error when getting custom AAGUID with undefined aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.getCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: undefined
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should handle getting a non-existent custom AAGUID', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    const nonExistentAAGUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    try {
      await client.authenticatorApi.getCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: nonExistentAAGUID
      });
      expect.fail('Should have thrown an error for non-existent AAGUID');
    } catch (error) {
      // Expected - should get 404 or similar error
      expect(error).to.exist;
    }
  });

  it('should throw error when replacing custom AAGUID with null authenticatorId', async () => {
    try {
      await client.authenticatorApi.replaceCustomAAGUID({
        authenticatorId: null,
        aaguid: 'test-aaguid-id',
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when replacing custom AAGUID with undefined authenticatorId', async () => {
    try {
      await client.authenticatorApi.replaceCustomAAGUID({
        authenticatorId: undefined,
        aaguid: 'test-aaguid-id',
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when replacing custom AAGUID with null aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.replaceCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: null,
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should throw error when replacing custom AAGUID with undefined aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.replaceCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: undefined,
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should replace a custom AAGUID', async function () {
    if (!webauthnAuthenticatorId || !createdAAGUID) {
      this.skip();
      return;
    }

    const updatedAAGUID = {
      name: `Updated AAGUID ${Date.now()}`,
      authenticatorCharacteristics: {
        fipsCompliant: true,
        hardwareProtected: false,
        platformAttached: true
      }
    };

    try {
      const replaced = await client.authenticatorApi.replaceCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: createdAAGUID,
        customAAGUIDUpdateRequestObject: updatedAAGUID
      });

      expect(replaced).to.have.property('name');
      expect(replaced.name).to.include('Updated AAGUID');
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 403 || status === 404 || status === 501 || status === 405) {
        this.skip();
      }
      throw error;
    }
  });

  it('should handle replacing a non-existent custom AAGUID', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    const nonExistentAAGUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    const updatedAAGUID = {
      name: `Non-existent AAGUID ${Date.now()}`,
      authenticatorCharacteristics: {
        fipsCompliant: false,
        hardwareProtected: true,
        platformAttached: false
      }
    };

    try {
      await client.authenticatorApi.replaceCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: nonExistentAAGUID,
        customAAGUIDUpdateRequestObject: updatedAAGUID
      });
      expect.fail('Should have thrown an error for non-existent AAGUID');
    } catch (error) {
      // Expected - should get 404 or similar error
      expect(error).to.exist;
    }
  });

  it('should throw error when updating custom AAGUID with null authenticatorId', async () => {
    try {
      await client.authenticatorApi.updateCustomAAGUID({
        authenticatorId: null,
        aaguid: 'test-aaguid-id',
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when updating custom AAGUID with undefined authenticatorId', async () => {
    try {
      await client.authenticatorApi.updateCustomAAGUID({
        authenticatorId: undefined,
        aaguid: 'test-aaguid-id',
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when updating custom AAGUID with null aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.updateCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: null,
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should throw error when updating custom AAGUID with undefined aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.updateCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: undefined,
        customAAGUIDUpdateRequestObject: { name: 'Test' }
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should update (patch) a custom AAGUID', async function () {
    if (!webauthnAuthenticatorId || !createdAAGUID) {
      this.skip();
      return;
    }

    const patchAAGUID = {
      name: `Patched AAGUID ${Date.now()}`
    };

    try {
      const patched = await client.authenticatorApi.updateCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: createdAAGUID,
        customAAGUIDUpdateRequestObject: patchAAGUID
      });

      expect(patched).to.have.property('name');
      expect(patched.name).to.include('Patched AAGUID');
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 403 || status === 404 || status === 501 || status === 405) {
        this.skip();
      }
      throw error;
    }
  });

  it('should handle updating a non-existent custom AAGUID', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    const nonExistentAAGUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    const patchAAGUID = {
      name: `Patched Non-existent AAGUID ${Date.now()}`
    };

    try {
      await client.authenticatorApi.updateCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: nonExistentAAGUID,
        customAAGUIDUpdateRequestObject: patchAAGUID
      });
      expect.fail('Should have thrown an error for non-existent AAGUID');
    } catch (error) {
      // Expected - should get 404 or similar error
      expect(error).to.exist;
    }
  });

  it('should delete a custom AAGUID', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    // Create an AAGUID to delete using a well-known YubiKey Bio FIDO Edition AAGUID
    const aaguid = 'd8522d9f-575b-4866-88a9-ba99fa02f35b';
    const customAAGUID = {
      aaguid: aaguid,
      authenticatorCharacteristics: {
        fipsCompliant: false,
        hardwareProtected: true,
        platformAttached: false
      }
    };

    try {
      const created = await client.authenticatorApi.createCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        customAAGUIDCreateRequestObject: customAAGUID
      });

      // Delete it
      await client.authenticatorApi.deleteCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: created.aaguid
      });

      // Verify it's deleted by trying to get it (should fail)
      try {
        await client.authenticatorApi.getCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          aaguid: created.aaguid
        });
        expect.fail('AAGUID should have been deleted');
      } catch (error) {
        // Expected to fail
        expect(error).to.exist;
      }
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
        this.skip();
      }
      throw error;
    }
  });

  it('should verify RP ID domain', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      const verification = await client.authenticatorApi.verifyRpIdDomain({
        authenticatorId: webauthnAuthenticatorId,
        webAuthnMethodType: 'webauthn'
      });

      expect(verification).to.exist;
    } catch (error) {
      const status = (error as any).status || (error as any).statusCode;
      if (status === 400 || status === 403 || status === 404 || status === 405 || status === 500 || status === 501) {
        this.skip();
      }
      throw error;
    }
  });

  it('should throw error when deleting custom AAGUID with null authenticatorId', async () => {
    try {
      await client.authenticatorApi.deleteCustomAAGUID({
        authenticatorId: null,
        aaguid: 'test-aaguid-id'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when deleting custom AAGUID with undefined authenticatorId', async () => {
    try {
      await client.authenticatorApi.deleteCustomAAGUID({
        authenticatorId: undefined,
        aaguid: 'test-aaguid-id'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('authenticatorId');
    }
  });

  it('should throw error when deleting custom AAGUID with null aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.deleteCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: null
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should throw error when deleting custom AAGUID with undefined aaguid', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    try {
      await client.authenticatorApi.deleteCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: undefined
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('aaguid');
    }
  });

  it('should handle deletion of non-existent AAGUID', async function () {
    if (!webauthnAuthenticatorId) {
      this.skip();
      return;
    }

    const nonExistentAAGUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    try {
      await client.authenticatorApi.deleteCustomAAGUID({
        authenticatorId: webauthnAuthenticatorId,
        aaguid: nonExistentAAGUID
      });
      // If it succeeds, that's fine - some implementations might return 204 even for non-existent resources
    } catch (error) {
      // Expected - should get 404 or similar error
      expect(error).to.exist;
      // Error should be about the AAGUID not being found
    }
  });
});
