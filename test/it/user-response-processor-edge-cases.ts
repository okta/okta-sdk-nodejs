import { expect } from 'chai';
import { UserApiResponseProcessor } from '../../src/generated/apis/UserApi';

function createMockResponse(statusCode: number, body: any, contentType: string = 'application/json') {
  return {
    httpStatusCode: statusCode,
    headers: { 'content-type': contentType },
    body: {
      text: async () => JSON.stringify(body)
    },
    getBodyAsAny: async () => body
  };
}

describe('UserApiResponseProcessor - Edge Cases', () => {
  let processor: UserApiResponseProcessor;

  beforeEach(() => {
    processor = new UserApiResponseProcessor();
  });

  // Test 2xx fallback and error codes for each method
  describe('activateUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { activationToken: 'token123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.activateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 202 response', async () => {
      const mockBody = { activationToken: 'token123' };
      const response = createMockResponse(202, mockBody);
      const result = await processor.activateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.activateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('changePassword - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { password: {} };
      const response = createMockResponse(201, mockBody);
      const result = await processor.changePassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.changePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('changeRecoveryQuestion - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { recovery_question: {} };
      const response = createMockResponse(201, mockBody);
      const result = await processor.changeRecoveryQuestion(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.changeRecoveryQuestion(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('createUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123', status: 'STAGED' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.createUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.createUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deactivateUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123' };
      const response = createMockResponse(201, mockBody);
      await processor.deactivateUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.deactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deleteLinkedObjectForUser - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.deleteLinkedObjectForUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.deleteLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deleteUser - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.deleteUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.deleteUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('endUserSessions - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.endUserSessions(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.endUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('expirePassword - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.expirePassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.expirePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('expirePasswordAndGetTemporaryPassword - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { tempPassword: 'temp123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.expirePasswordAndGetTemporaryPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.expirePasswordAndGetTemporaryPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('forgotPassword - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { resetPasswordUrl: 'https://example.com/reset' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.forgotPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('forgotPasswordSetNewPassword - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { password: {} };
      const response = createMockResponse(201, mockBody);
      const result = await processor.forgotPasswordSetNewPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.forgotPasswordSetNewPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('generateResetPasswordToken - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { resetPasswordUrl: 'https://example.com/reset' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.generateResetPasswordToken(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.generateResetPasswordToken(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getIdentityProviderApplicationUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'idp123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.getIdentityProviderApplicationUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.getIdentityProviderApplicationUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getRefreshTokenForUserAndClient - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'token123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.getRefreshTokenForUserAndClient(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.getRefreshTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123', status: 'ACTIVE' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.getUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.getUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getUserClassification - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { classification: 'HIGH_VALUE' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.getUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.getUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getUserGrant - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'grant123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.getUserGrant(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.getUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getUserRisk - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { level: 'HIGH' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.getUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.getUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('linkUserToIdentityProvider - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'idp123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.linkUserToIdentityProvider(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listAppLinks - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ appName: 'app1' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listAppLinks(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listAppLinks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listGrantsForUserAndClient - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'grant123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listGrantsForUserAndClient(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listIdentityProviderApplicationUsers - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'idp123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listIdentityProviderApplicationUsers(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listIdentityProviderApplicationUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listLinkedObjectsForUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ primary: { id: 'user1' } }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listLinkedObjectsForUser(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listLinkedObjectsForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listRefreshTokensForUserAndClient - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'token123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listRefreshTokensForUserAndClient(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listRefreshTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listSocialAuthTokens - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'token123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listSocialAuthTokens(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listSocialAuthTokens(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUserBlocks - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'block123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUserBlocks(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUserBlocks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUserClients - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ client_id: 'client123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUserClients(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUserClients(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUserDevices - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'device123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUserDevices(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUserDevices(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUserGrants - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'grant123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUserGrants(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUserGroups - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'group123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUserGroups(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUserGroups(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUserIdentityProviders - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'idp123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUserIdentityProviders(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUserIdentityProviders(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listUsers - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = [{ id: 'user123' }];
      const response = createMockResponse(201, mockBody);
      const result = await processor.listUsers(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.listUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('reactivateUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123', status: 'ACTIVE' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.reactivateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.reactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('replaceUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.replaceUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.replaceUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('replaceUserClassification - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { classification: 'HIGH_VALUE' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.replaceUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.replaceUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('resetFactors - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = {};
      const response = createMockResponse(201, mockBody);
      await processor.resetFactors(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.resetFactors(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('revokeGrantsForUserAndClient - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.revokeGrantsForUserAndClient(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.revokeGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('revokeTokenForUserAndClient - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.revokeTokenForUserAndClient(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.revokeTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('revokeTokensForUserAndClient - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.revokeTokensForUserAndClient(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.revokeTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('revokeUserGrant - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.revokeUserGrant(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.revokeUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('revokeUserGrants - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.revokeUserGrants(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.revokeUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('revokeUserSessions - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.revokeUserSessions(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.revokeUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('setLinkedObjectForUser - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.setLinkedObjectForUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.setLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('suspendUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = {};
      const response = createMockResponse(201, mockBody);
      await processor.suspendUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.suspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('unlinkUserFromIdentityProvider - edge cases', () => {
    it('should handle 205 response', async () => {
      const mockBody = {};
      const response = createMockResponse(205, mockBody);
      await processor.unlinkUserFromIdentityProvider(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.unlinkUserFromIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('unlockUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = {};
      const response = createMockResponse(201, mockBody);
      await processor.unlockUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.unlockUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('unsuspendUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = {};
      const response = createMockResponse(201, mockBody);
      await processor.unsuspendUser(response as any);
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.unsuspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('updateUser - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { id: 'user123', profile: { email: 'updated@example.com' } };
      const response = createMockResponse(201, mockBody);
      const result = await processor.updateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.updateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('upsertUserRisk - edge cases', () => {
    it('should handle 201 response', async () => {
      const mockBody = { level: 'HIGH' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.upsertUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 500 error', async () => {
      const mockBody = { error: 'Internal Server Error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.upsertUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });
});
