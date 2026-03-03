import { expect } from 'chai';
import { UserApiResponseProcessor } from '../../src/generated/apis/UserApi';

function createMockResponse(statusCode: number, body: any, contentType = 'application/json') {
  return {
    httpStatusCode: statusCode,
    headers: { 'content-type': contentType },
    body: {
      text: async () => JSON.stringify(body)
    },
    getBodyAsAny: async () => body
  };
}

describe('UserApiResponseProcessor', () => {
  let processor: UserApiResponseProcessor;

  beforeEach(() => {
    processor = new UserApiResponseProcessor();
  });

  // activateUser tests
  describe('activateUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { activationToken: 'token123', activationUrl: 'https://example.com/activate' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.activateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.activateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.activateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.activateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const mockBody = { activationToken: 'token123' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.activateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on unknown status code', async () => {
      const mockBody = { error: 'Server error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.activateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  // changePassword tests
  describe('changePassword', () => {
    it('should handle 200 response', async () => {
      const mockBody = { password: {}, provider: {}, recovery_question: {} };
      const response = createMockResponse(200, mockBody);
      const result = await processor.changePassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.changePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.changePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.changePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.changePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const mockBody = { password: {} };
      const response = createMockResponse(202, mockBody);
      const result = await processor.changePassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on unknown status code', async () => {
      const mockBody = { error: 'Server error' };
      const response = createMockResponse(500, mockBody);
      try {
        await processor.changePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  // changeRecoveryQuestion tests
  describe('changeRecoveryQuestion', () => {
    it('should handle 200 response', async () => {
      const mockBody = { recovery_question: { question: 'test' } };
      const response = createMockResponse(200, mockBody);
      const result = await processor.changeRecoveryQuestion(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.changeRecoveryQuestion(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.changeRecoveryQuestion(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.changeRecoveryQuestion(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.changeRecoveryQuestion(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // createUser tests
  describe('createUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'user123', status: 'STAGED', profile: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' } };
      const response = createMockResponse(200, mockBody);
      const result = await processor.createUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.createUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.createUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.createUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // deactivateUser tests
  describe('deactivateUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = {};
      const response = createMockResponse(200, mockBody);
      await processor.deactivateUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.deactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.deactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.deactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // deleteLinkedObjectForUser tests
  describe('deleteLinkedObjectForUser', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.deleteLinkedObjectForUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.deleteLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.deleteLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.deleteLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // deleteUser tests
  describe('deleteUser', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.deleteUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.deleteUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.deleteUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.deleteUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // endUserSessions tests
  describe('endUserSessions', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.endUserSessions(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.endUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.endUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.endUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // expirePassword tests
  describe('expirePassword', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'user123', status: 'PASSWORD_EXPIRED' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.expirePassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.expirePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.expirePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.expirePassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // expirePasswordAndGetTemporaryPassword tests
  describe('expirePasswordAndGetTemporaryPassword', () => {
    it('should handle 200 response', async () => {
      const mockBody = { tempPassword: 'temp123' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.expirePasswordAndGetTemporaryPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.expirePasswordAndGetTemporaryPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.expirePasswordAndGetTemporaryPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.expirePasswordAndGetTemporaryPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // forgotPassword tests
  describe('forgotPassword', () => {
    it('should handle 200 response', async () => {
      const mockBody = { resetPasswordUrl: 'https://example.com/reset' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.forgotPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // forgotPasswordSetNewPassword tests
  describe('forgotPasswordSetNewPassword', () => {
    it('should handle 200 response', async () => {
      const mockBody = { password: {} };
      const response = createMockResponse(200, mockBody);
      const result = await processor.forgotPasswordSetNewPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.forgotPasswordSetNewPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.forgotPasswordSetNewPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.forgotPasswordSetNewPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // generateResetPasswordToken tests
  describe('generateResetPasswordToken', () => {
    it('should handle 200 response', async () => {
      const mockBody = { resetPasswordUrl: 'https://example.com/reset' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.generateResetPasswordToken(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.generateResetPasswordToken(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.generateResetPasswordToken(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.generateResetPasswordToken(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // getIdentityProviderApplicationUser tests
  describe('getIdentityProviderApplicationUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'idp123', externalId: 'ext123' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getIdentityProviderApplicationUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.getIdentityProviderApplicationUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.getIdentityProviderApplicationUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.getIdentityProviderApplicationUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // getRefreshTokenForUserAndClient tests
  describe('getRefreshTokenForUserAndClient', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'token123', clientId: 'client123', userId: 'user123' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getRefreshTokenForUserAndClient(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.getRefreshTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.getRefreshTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.getRefreshTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // getUser tests
  describe('getUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'user123', status: 'ACTIVE', profile: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' } };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.getUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.getUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.getUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // getUserClassification tests
  describe('getUserClassification', () => {
    it('should handle 200 response', async () => {
      const mockBody = { classification: 'HIGH_VALUE' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.getUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.getUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.getUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // getUserGrant tests
  describe('getUserGrant', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'grant123', scopeId: 'scope123', userId: 'user123' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserGrant(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.getUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.getUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.getUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // getUserRisk tests
  describe('getUserRisk', () => {
    it('should handle 200 response', async () => {
      const mockBody = { level: 'HIGH' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.getUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.getUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.getUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // linkUserToIdentityProvider tests
  describe('linkUserToIdentityProvider', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'idp123', externalId: 'ext123' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.linkUserToIdentityProvider(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listAppLinks tests
  describe('listAppLinks', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ appName: 'app1', appInstanceId: 'inst1' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listAppLinks(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listAppLinks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listAppLinks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listAppLinks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listGrantsForUserAndClient tests
  describe('listGrantsForUserAndClient', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'grant123', scopeId: 'scope123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listGrantsForUserAndClient(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listIdentityProviderApplicationUsers tests
  describe('listIdentityProviderApplicationUsers', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'idp123', externalId: 'ext123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listIdentityProviderApplicationUsers(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listIdentityProviderApplicationUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listIdentityProviderApplicationUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listIdentityProviderApplicationUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listLinkedObjectsForUser tests
  describe('listLinkedObjectsForUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ primary: { id: 'user1' } }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listLinkedObjectsForUser(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listLinkedObjectsForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listLinkedObjectsForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listLinkedObjectsForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listRefreshTokensForUserAndClient tests
  describe('listRefreshTokensForUserAndClient', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'token123', clientId: 'client123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listRefreshTokensForUserAndClient(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listRefreshTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listRefreshTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listRefreshTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listSocialAuthTokens tests
  describe('listSocialAuthTokens', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'token123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listSocialAuthTokens(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listSocialAuthTokens(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listSocialAuthTokens(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listSocialAuthTokens(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUserBlocks tests
  describe('listUserBlocks', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'block123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserBlocks(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUserBlocks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listUserBlocks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUserBlocks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUserClients tests
  describe('listUserClients', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ client_id: 'client123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserClients(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUserClients(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listUserClients(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUserClients(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUserDevices tests
  describe('listUserDevices', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'device123', status: 'ACTIVE' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserDevices(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUserDevices(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listUserDevices(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUserDevices(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUserGrants tests
  describe('listUserGrants', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'grant123', scopeId: 'scope123' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserGrants(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUserGroups tests
  describe('listUserGroups', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'group123', profile: { name: 'Test Group' } }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserGroups(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUserGroups(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listUserGroups(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUserGroups(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUserIdentityProviders tests
  describe('listUserIdentityProviders', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'idp123', type: 'SAML2' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserIdentityProviders(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUserIdentityProviders(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.listUserIdentityProviders(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUserIdentityProviders(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // listUsers tests
  describe('listUsers', () => {
    it('should handle 200 response', async () => {
      const mockBody = [{ id: 'user123', status: 'ACTIVE', profile: { email: 'test@example.com' } }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUsers(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.listUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.listUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // reactivateUser tests
  describe('reactivateUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'user123', status: 'ACTIVE' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.reactivateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.reactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.reactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.reactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // replaceUser tests
  describe('replaceUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'user123', status: 'ACTIVE', profile: { email: 'test@example.com' } };
      const response = createMockResponse(200, mockBody);
      const result = await processor.replaceUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.replaceUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.replaceUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.replaceUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.replaceUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // replaceUserClassification tests
  describe('replaceUserClassification', () => {
    it('should handle 200 response', async () => {
      const mockBody = { classification: 'HIGH_VALUE' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.replaceUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.replaceUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.replaceUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.replaceUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.replaceUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // resetFactors tests
  describe('resetFactors', () => {
    it('should handle 200 response', async () => {
      const mockBody = {};
      const response = createMockResponse(200, mockBody);
      await processor.resetFactors(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.resetFactors(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.resetFactors(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.resetFactors(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // revokeGrantsForUserAndClient tests
  describe('revokeGrantsForUserAndClient', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeGrantsForUserAndClient(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.revokeGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.revokeGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.revokeGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // revokeTokenForUserAndClient tests
  describe('revokeTokenForUserAndClient', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeTokenForUserAndClient(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.revokeTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.revokeTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.revokeTokenForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // revokeTokensForUserAndClient tests
  describe('revokeTokensForUserAndClient', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeTokensForUserAndClient(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.revokeTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.revokeTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.revokeTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // revokeUserGrant tests
  describe('revokeUserGrant', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeUserGrant(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.revokeUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.revokeUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.revokeUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // revokeUserGrants tests
  describe('revokeUserGrants', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeUserGrants(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.revokeUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.revokeUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.revokeUserGrants(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // revokeUserSessions tests
  describe('revokeUserSessions', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeUserSessions(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.revokeUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.revokeUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.revokeUserSessions(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // setLinkedObjectForUser tests
  describe('setLinkedObjectForUser', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.setLinkedObjectForUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.setLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.setLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.setLinkedObjectForUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // suspendUser tests
  describe('suspendUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = {};
      const response = createMockResponse(200, mockBody);
      await processor.suspendUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.suspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.suspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.suspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // unlinkUserFromIdentityProvider tests
  describe('unlinkUserFromIdentityProvider', () => {
    it('should handle 204 response', async () => {
      const response = createMockResponse(204, {});
      await processor.unlinkUserFromIdentityProvider(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.unlinkUserFromIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.unlinkUserFromIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.unlinkUserFromIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // unlockUser tests
  describe('unlockUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = {};
      const response = createMockResponse(200, mockBody);
      await processor.unlockUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.unlockUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.unlockUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.unlockUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // unsuspendUser tests
  describe('unsuspendUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = {};
      const response = createMockResponse(200, mockBody);
      await processor.unsuspendUser(response as any);
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.unsuspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.unsuspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.unsuspendUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // updateUser tests
  describe('updateUser', () => {
    it('should handle 200 response', async () => {
      const mockBody = { id: 'user123', status: 'ACTIVE', profile: { email: 'updated@example.com' } };
      const response = createMockResponse(200, mockBody);
      const result = await processor.updateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.updateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.updateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.updateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.updateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  // upsertUserRisk tests
  describe('upsertUserRisk', () => {
    it('should handle 200 response', async () => {
      const mockBody = { level: 'HIGH' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.upsertUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw ApiException on 400', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.upsertUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw ApiException on 403', async () => {
      const mockBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockBody);
      try {
        await processor.upsertUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw ApiException on 404', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, mockBody);
      try {
        await processor.upsertUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw ApiException on 429', async () => {
      const mockBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, mockBody);
      try {
        await processor.upsertUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });
});
