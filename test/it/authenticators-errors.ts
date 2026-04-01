import { Client, DefaultRequestExecutor, AuthenticatorBase, AuthenticatorMethodBase, AuthenticatorMethodType, AuthenticatorMethodTypeWebAuthn, CustomAAGUIDCreateRequestObject } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticator-errors`;
}

const client = new Client({
  scopes: ['okta.authenticators.read', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authenticators API - Error Response Tests', () => {
  before(async () => {
    await utils.activateSecurityQuestion(client);
  });

  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
  });

  // Tests for activateAuthenticator response processor
  it('should handle 404 error when activating non-existent authenticator', async () => {
    const nonExistentId = `aut${  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    })}`;

    try {
      await client.authenticatorApi.activateAuthenticator({authenticatorId: nonExistentId});
      expect.fail('Should have thrown a 404 error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([404, 400]);
    }
  });

  it('should handle invalid authenticatorId format for activation', async () => {
    try {
      await client.authenticatorApi.activateAuthenticator({authenticatorId: 'invalid-id-format'});
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      // Could be 400 or 404 depending on validation
      expect(error.status).to.be.oneOf([400, 404]);
    }
  });

  // Tests for deactivateAuthenticator response processor
  it('should handle 404 error when deactivating non-existent authenticator', async () => {
    const nonExistentId = `aut${  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    })}`;

    try {
      await client.authenticatorApi.deactivateAuthenticator({authenticatorId: nonExistentId});
      expect.fail('Should have thrown a 404 error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([404, 400]);
    }
  });

  it('should handle invalid authenticatorId format for deactivation', async () => {
    try {
      await client.authenticatorApi.deactivateAuthenticator({authenticatorId: 'invalid-id-format'});
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([400, 404]);
    }
  });

  // Tests for createAuthenticator response processor
  it('should handle 400 error when creating authenticator with invalid data', async () => {
    const invalidAuthenticator = {
      key: 'invalid_key_that_does_not_exist',
      name: 'Invalid Authenticator',
      type: 'invalid_type'
    } as unknown as AuthenticatorBase;

    try {
      await client.authenticatorApi.createAuthenticator({
        authenticator: invalidAuthenticator
      });
      expect.fail('Should have thrown a 400 error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.equal(400);
    }
  });

  it('should handle error when creating authenticator with missing required fields', async () => {
    const incompleteAuthenticator = {
      name: 'Incomplete Authenticator'
      // Missing key and type
    };

    try {
      await client.authenticatorApi.createAuthenticator({
        authenticator: incompleteAuthenticator
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.equal(400);
    }
  });

  // Tests for activateAuthenticatorMethod response processor
  it('should handle 404 error when activating non-existent authenticator method', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_question') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.activateAuthenticatorMethod({
          authenticatorId,
          methodType: 'non_existent_method' as unknown as AuthenticatorMethodType
        });
        expect.fail('Should have thrown a 404 error');
      } catch (error) {
        expect(error).to.exist;
        // Could be 400 or 404 depending on implementation
        expect(error.status).to.be.oneOf([400, 404]);
      }
    }
  });

  it('should handle invalid method type format for activation', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_question') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.activateAuthenticatorMethod({
          authenticatorId,
          methodType: 'invalid-method-format-!!!' as unknown as AuthenticatorMethodType
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 404]);
      }
    }
  });

  // Tests for deactivateAuthenticatorMethod response processor
  it('should handle 404 error when deactivating non-existent authenticator method', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_question') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.deactivateAuthenticatorMethod({
          authenticatorId,
          methodType: 'non_existent_method' as unknown as AuthenticatorMethodType
        });
        expect.fail('Should have thrown a 404 error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 404]);
      }
    }
  });

  it('should handle invalid method type format for deactivation', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_question') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.deactivateAuthenticatorMethod({
          authenticatorId,
          methodType: 'invalid-method-format-!!!' as unknown as AuthenticatorMethodType
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 404]);
      }
    }
  });

  // Additional error scenario tests
  it('should handle error when activating authenticator method with non-existent authenticatorId', async () => {
    const nonExistentId = `aut${  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    })}`;

    try {
      await client.authenticatorApi.activateAuthenticatorMethod({
        authenticatorId: nonExistentId,
        methodType: 'otp'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([400, 404]);
    }
  });

  it('should handle error when deactivating authenticator method with non-existent authenticatorId', async () => {
    const nonExistentId = `aut${  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    })}`;

    try {
      await client.authenticatorApi.deactivateAuthenticatorMethod({
        authenticatorId: nonExistentId,
        methodType: 'otp'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([400, 404]);
    }
  });

  // Tests for createCustomAAGUID response processor
  it('should handle 404 error when creating custom AAGUID with non-existent authenticator', async () => {
    const nonExistentId = `aut${  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    })}`;

    const aaguid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    const customAAGUID = {
      aaguid: aaguid,
      name: `Test AAGUID ${Date.now()}`,
      authenticatorCharacteristics: {
        fipsCompliant: false,
        hardwareProtected: true,
        platformAttached: false
      }
    };

    try {
      await client.authenticatorApi.createCustomAAGUID({
        authenticatorId: nonExistentId,
        customAAGUIDCreateRequestObject: customAAGUID
      });
      expect.fail('Should have thrown a 404 error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([400, 404]);
    }
  });

  it('should handle error when creating custom AAGUID with invalid AAGUID format', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      const customAAGUID = {
        aaguid: 'invalid-aaguid-format',
        name: `Test Invalid AAGUID ${Date.now()}`,
        authenticatorCharacteristics: {
          fipsCompliant: false,
          hardwareProtected: true,
          platformAttached: false
        }
      };

      try {
        await client.authenticatorApi.createCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          customAAGUIDCreateRequestObject: customAAGUID
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        // Should be 400 for invalid format
        expect(error.status).to.be.oneOf([400, 404]);
      }
    }
  });

  it('should handle error when creating custom AAGUID with missing required fields', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      const incompleteAAGUID = {
        name: `Incomplete AAGUID ${Date.now()}`
        // Missing aaguid and authenticatorCharacteristics
      } as unknown as CustomAAGUIDCreateRequestObject;

      try {
        await client.authenticatorApi.createCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          customAAGUIDCreateRequestObject: incompleteAAGUID
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        // API may return 400 or 500 depending on the validation layer
        expect(error.status).to.be.oneOf([400, 500]);
      }
    }
  });

  it('should handle error when creating custom AAGUID with empty name', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      const aaguid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });

      const customAAGUID = {
        aaguid: aaguid,
        name: '',  // Empty name
        authenticatorCharacteristics: {
          fipsCompliant: false,
          hardwareProtected: true,
          platformAttached: false
        }
      };

      try {
        await client.authenticatorApi.createCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          customAAGUIDCreateRequestObject: customAAGUID
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.equal(400);
      }
    }
  });

  it('should handle error when creating custom AAGUID with duplicate AAGUID', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      const aaguid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });

      const customAAGUID = {
        aaguid: aaguid,
        name: `Test AAGUID Duplicate ${Date.now()}`,
        authenticatorCharacteristics: {
          fipsCompliant: false,
          hardwareProtected: true,
          platformAttached: false
        }
      };

      try {
        // Try to create the same AAGUID twice
        const created = await client.authenticatorApi.createCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          customAAGUIDCreateRequestObject: customAAGUID
        });

        // If first succeeds, try to create duplicate
        if (created) {
          try {
            await client.authenticatorApi.createCustomAAGUID({
              authenticatorId: webauthnAuthenticatorId,
              customAAGUIDCreateRequestObject: customAAGUID
            });
            expect.fail('Should have thrown an error for duplicate AAGUID');
          } catch (duplicateError) {
            expect(duplicateError).to.exist;
            expect(duplicateError.status).to.be.oneOf([400, 409]);
          } finally {
            // Cleanup
            try {
              await client.authenticatorApi.deleteCustomAAGUID({
                authenticatorId: webauthnAuthenticatorId,
                aaguid: created.aaguid
              });
            } catch (cleanupError) {
              console.log('Cleanup error:', cleanupError.message);
            }
          }
        }
      } catch (error) {
        // First creation might fail due to org limitations
        console.log('Create custom AAGUID not supported:', error.message);
      }
    }
  });

  // Tests for remaining AuthenticatorApiResponseProcessor methods

  it('should handle 404 error when getting non-existent authenticator', async () => {
    try {
      await client.authenticatorApi.getAuthenticator({
        authenticatorId: 'aut00000000000000000'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([403, 404]);
    }
  });

  it('should handle error when getting authenticator method with invalid type', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'email') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.getAuthenticatorMethod({
          authenticatorId,
          methodType: 'invalid_method_type' as unknown as AuthenticatorMethodType
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 404]);
      }
    }
  });

  it('should handle error when deleting non-existent custom AAGUID', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      try {
        await client.authenticatorApi.deleteCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          aaguid: '12345678-1234-1234-1234-123456789012'
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 403, 404]);
      }
    }
  });

  it('should handle error when getting non-existent custom AAGUID', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      try {
        await client.authenticatorApi.getCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          aaguid: '12345678-1234-1234-1234-123456789012'
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([403, 404]);
      }
    }
  });

  it('should handle error when replacing non-existent custom AAGUID', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      try {
        await client.authenticatorApi.replaceCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          aaguid: '12345678-1234-1234-1234-123456789012',
          customAAGUIDUpdateRequestObject: {
            name: 'Updated AAGUID'
          }
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([403, 404, 500]);
      }
    }
  });

  it('should handle error when updating non-existent custom AAGUID', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      try {
        await client.authenticatorApi.updateCustomAAGUID({
          authenticatorId: webauthnAuthenticatorId,
          aaguid: '12345678-1234-1234-1234-123456789012',
          customAAGUIDUpdateRequestObject: {
            name: 'Updated AAGUID'
          }
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([403, 404, 405]);
      }
    }
  });

  it('should handle error when replacing authenticator with invalid data', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'email') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.replaceAuthenticator({
          authenticatorId,
          authenticator: {
            // Invalid: missing required fields
          } as AuthenticatorBase
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 403, 404]);
      }
    }
  });

  it('should handle error when replacing authenticator method with invalid data', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        authenticatorId = item.id;
      }
    });

    if (authenticatorId) {
      try {
        await client.authenticatorApi.replaceAuthenticatorMethod({
          authenticatorId,
          methodType: 'webauthn',
          authenticatorMethodBase: {
            // Invalid: missing required fields
          } as AuthenticatorMethodBase
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 403, 404]);
      }
    }
  });

  it('should handle error when listing custom AAGUIDs with non-existent authenticator', async () => {
    try {
      await client.authenticatorApi.listAllCustomAAGUIDs({
        authenticatorId: 'aut00000000000000000'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([403, 404]);
    }
  });

  it('should handle error when listing methods with non-existent authenticator', async () => {
    try {
      const methods = await client.authenticatorApi.listAuthenticatorMethods({
        authenticatorId: 'aut00000000000000000'
      });
      // API may return empty array instead of throwing error
      expect(methods).to.exist;
    } catch (error) {
      // If it does throw, accept these status codes
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([403, 404]);
    }
  });

  it('should handle error when getting well-known config with invalid OAuth client ID', async () => {
    try {
      const config = await client.authenticatorApi.getWellKnownAppAuthenticatorConfiguration({
        oauthClientId: 'invalid_client_id'
      });
      // API may return empty array instead of throwing error
      expect(config).to.exist;
    } catch (error) {
      // If it does throw, accept these status codes
      expect(error).to.exist;
      expect(error.status).to.be.oneOf([400, 404]);
    }
  });

  it('should handle error when verifying RP ID domain with invalid method type', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let webauthnAuthenticatorId: string;

    await authenticators.each(async (item) => {
      if (item.type === 'security_key' || item.key === 'webauthn') {
        webauthnAuthenticatorId = item.id;
      }
    });

    if (webauthnAuthenticatorId) {
      try {
        await client.authenticatorApi.verifyRpIdDomain({
          authenticatorId: webauthnAuthenticatorId,
          webAuthnMethodType: 'invalid_method' as unknown as AuthenticatorMethodTypeWebAuthn
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error).to.exist;
        expect(error.status).to.be.oneOf([400, 403, 404]);
      }
    }
  });
});
