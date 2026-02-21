import { expect } from 'chai';
import { AuthenticatorApiRequestFactory } from '../../src/generated/apis/AuthenticatorApi';

describe('AuthenticatorApiRequestFactory', () => {
  let factory: AuthenticatorApiRequestFactory;

  beforeEach(() => {
    factory = new AuthenticatorApiRequestFactory();
  });

  describe('activateAuthenticator', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.activateAuthenticator(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when authenticatorId is undefined', async () => {
      try {
        await factory.activateAuthenticator(undefined as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });
  });

  describe('activateAuthenticatorMethod', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.activateAuthenticatorMethod(null as any, 'webauthn');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when methodType is null', async () => {
      try {
        await factory.activateAuthenticatorMethod('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('methodType');
      }
    });
  });

  describe('createAuthenticator', () => {
    it('should throw error when authenticator is null', async () => {
      try {
        await factory.createAuthenticator(null as any, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticator');
      }
    });

    it('should throw error when authenticator is undefined', async () => {
      try {
        await factory.createAuthenticator(undefined as any, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticator');
      }
    });
  });

  describe('createCustomAAGUID', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.createCustomAAGUID(null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });
  });

  describe('deactivateAuthenticator', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.deactivateAuthenticator(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when authenticatorId is undefined', async () => {
      try {
        await factory.deactivateAuthenticator(undefined as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });
  });

  describe('deactivateAuthenticatorMethod', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.deactivateAuthenticatorMethod(null as any, 'webauthn');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when methodType is null', async () => {
      try {
        await factory.deactivateAuthenticatorMethod('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('methodType');
      }
    });
  });

  describe('deleteCustomAAGUID', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.deleteCustomAAGUID(null as any, 'aaguid123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when aaguid is null', async () => {
      try {
        await factory.deleteCustomAAGUID('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('aaguid');
      }
    });
  });

  describe('getAuthenticator', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.getAuthenticator(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });
  });

  describe('getAuthenticatorMethod', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.getAuthenticatorMethod(null as any, 'webauthn');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when methodType is null', async () => {
      try {
        await factory.getAuthenticatorMethod('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('methodType');
      }
    });
  });

  describe('getCustomAAGUID', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.getCustomAAGUID(null as any, 'aaguid123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when aaguid is null', async () => {
      try {
        await factory.getCustomAAGUID('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('aaguid');
      }
    });
  });

  describe('getWellKnownAppAuthenticatorConfiguration', () => {
    it('should throw error when oauthClientId is null', async () => {
      try {
        await factory.getWellKnownAppAuthenticatorConfiguration(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('oauthClientId');
      }
    });
  });

  describe('listAllCustomAAGUIDs', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.listAllCustomAAGUIDs(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });
  });

  describe('listAuthenticatorMethods', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.listAuthenticatorMethods(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });
  });

  describe('replaceAuthenticator', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.replaceAuthenticator(null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when authenticator is null', async () => {
      try {
        await factory.replaceAuthenticator('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticator');
      }
    });
  });

  describe('replaceAuthenticatorMethod', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.replaceAuthenticatorMethod(null as any, 'webauthn', {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when methodType is null', async () => {
      try {
        await factory.replaceAuthenticatorMethod('aut123', null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('methodType');
      }
    });
  });

  describe('replaceCustomAAGUID', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.replaceCustomAAGUID(null as any, 'aaguid123', {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when aaguid is null', async () => {
      try {
        await factory.replaceCustomAAGUID('aut123', null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('aaguid');
      }
    });
  });

  describe('updateCustomAAGUID', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.updateCustomAAGUID(null as any, 'aaguid123', {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when aaguid is null', async () => {
      try {
        await factory.updateCustomAAGUID('aut123', null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('aaguid');
      }
    });
  });

  describe('verifyRpIdDomain', () => {
    it('should throw error when authenticatorId is null', async () => {
      try {
        await factory.verifyRpIdDomain(null as any, 'webauthn');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('authenticatorId');
      }
    });

    it('should throw error when webAuthnMethodType is null', async () => {
      try {
        await factory.verifyRpIdDomain('aut123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('webAuthnMethodType');
      }
    });
  });
});
