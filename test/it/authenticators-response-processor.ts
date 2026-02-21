import { expect } from 'chai';
import { AuthenticatorApiResponseProcessor } from '../../src/generated/apis/AuthenticatorApi';

describe('AuthenticatorApiResponseProcessor', () => {
  let processor: AuthenticatorApiResponseProcessor;

  beforeEach(() => {
    processor = new AuthenticatorApiResponseProcessor();
  });

  // Helper to create mock response
  const createMockResponse = (statusCode: number, body: any, contentType = 'application/json') => {
    return {
      httpStatusCode: statusCode,
      headers: {
        'content-type': contentType
      },
      body: {
        text: async () => JSON.stringify(body)
      },
      getBodyAsAny: async () => body
    };
  };

  describe('activateAuthenticator', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'aut123',
        type: 'email',
        status: 'ACTIVE'
      });

      const result = await processor.activateAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.activateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.activateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.activateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(201, {
        id: 'aut123',
        type: 'email'
      });

      const result = await processor.activateAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.activateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('activateAuthenticatorMethod', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'method123',
        type: 'webauthn',
        status: 'ACTIVE'
      });

      const result = await processor.activateAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.activateAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.activateAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(202, {
        id: 'method123',
        type: 'webauthn'
      });

      const result = await processor.activateAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.activateAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('createAuthenticator', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'aut123',
        type: 'email',
        status: 'INACTIVE'
      });

      const result = await processor.createAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 400 error', async () => {
      const mockResponse = createMockResponse(400, {
        errorCode: 'E0000001',
        errorSummary: 'Bad Request'
      });

      try {
        await processor.createAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.createAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(201, {
        id: 'aut123',
        type: 'email'
      });

      const result = await processor.createAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.createAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('createCustomAAGUID', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Test AAGUID'
      });

      const result = await processor.createCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.createCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.createCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(201, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Test AAGUID'
      });

      const result = await processor.createCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.createCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deactivateAuthenticator', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'aut123',
        type: 'email',
        status: 'INACTIVE'
      });

      const result = await processor.deactivateAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.deactivateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.deactivateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(202, {
        id: 'aut123',
        type: 'email'
      });

      const result = await processor.deactivateAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.deactivateAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deactivateAuthenticatorMethod', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'method123',
        type: 'webauthn',
        status: 'INACTIVE'
      });

      const result = await processor.deactivateAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.deactivateAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(202, {
        id: 'method123',
        type: 'webauthn'
      });

      const result = await processor.deactivateAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.deactivateAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deleteCustomAAGUID', () => {
    it('should handle 204 response', async () => {
      const mockResponse = createMockResponse(204, '');

      const result = await processor.deleteCustomAAGUID(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.deleteCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.deleteCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(200, '');

      const result = await processor.deleteCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.deleteCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getAuthenticator', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'aut123',
        type: 'email',
        status: 'ACTIVE'
      });

      const result = await processor.getAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.getAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.getAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle unexpected 2xx status code', async () => {
      const mockResponse = createMockResponse(202, {
        id: 'aut123',
        type: 'email'
      });

      const result = await processor.getAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.getAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getAuthenticatorMethod', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'method123',
        type: 'webauthn',
        status: 'ACTIVE'
      });

      const result = await processor.getAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.getAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.getAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getCustomAAGUID', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Test AAGUID'
      });

      const result = await processor.getCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.getCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.getCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getWellKnownAppAuthenticatorConfiguration', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, [{
        oauthClientId: 'client123',
        name: 'Test Config'
      }]);

      const result = await processor.getWellKnownAppAuthenticatorConfiguration(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 400 error', async () => {
      const mockResponse = createMockResponse(400, {
        errorCode: 'E0000001',
        errorSummary: 'Bad Request'
      });

      try {
        await processor.getWellKnownAppAuthenticatorConfiguration(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });
  });

  describe('listAllCustomAAGUIDs', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        aaguids: [
          { aaguid: '12345678-1234-1234-1234-123456789012', name: 'AAGUID 1' }
        ]
      });

      const result = await processor.listAllCustomAAGUIDs(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.listAllCustomAAGUIDs(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.listAllCustomAAGUIDs(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('listAuthenticatorMethods', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, [
        { id: 'method1', type: 'webauthn', status: 'ACTIVE' }
      ]);

      const result = await processor.listAuthenticatorMethods(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.listAuthenticatorMethods(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.listAuthenticatorMethods(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('listAuthenticators', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, [
        { id: 'aut1', type: 'email', status: 'ACTIVE' },
        { id: 'aut2', type: 'sms', status: 'ACTIVE' }
      ]);

      const result = await processor.listAuthenticators(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.listAuthenticators(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });
  });

  describe('replaceAuthenticator', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'aut123',
        type: 'email',
        status: 'ACTIVE'
      });

      const result = await processor.replaceAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 400 error', async () => {
      const mockResponse = createMockResponse(400, {
        errorCode: 'E0000001',
        errorSummary: 'Bad Request'
      });

      try {
        await processor.replaceAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.replaceAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.replaceAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('replaceAuthenticatorMethod', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        id: 'method123',
        type: 'webauthn',
        status: 'ACTIVE'
      });

      const result = await processor.replaceAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 400 error', async () => {
      const mockResponse = createMockResponse(400, {
        errorCode: 'E0000001',
        errorSummary: 'Bad Request'
      });

      try {
        await processor.replaceAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.replaceAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });
  });

  describe('replaceCustomAAGUID', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Updated AAGUID'
      });

      const result = await processor.replaceCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.replaceCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.replaceCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('updateCustomAAGUID', () => {
    it('should deserialize 200 response', async () => {
      const mockResponse = createMockResponse(200, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Patched AAGUID'
      });

      const result = await processor.updateCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.updateCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.updateCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('verifyRpIdDomain', () => {
    it('should handle 204 response', async () => {
      const mockResponse = createMockResponse(204, '');

      const result = await processor.verifyRpIdDomain(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw 400 error', async () => {
      const mockResponse = createMockResponse(400, {
        errorCode: 'E0000001',
        errorSummary: 'Bad Request'
      });

      try {
        await processor.verifyRpIdDomain(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw 403 error', async () => {
      const mockResponse = createMockResponse(403, {
        errorCode: 'E0000006',
        errorSummary: 'Forbidden'
      });

      try {
        await processor.verifyRpIdDomain(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw 404 error', async () => {
      const mockResponse = createMockResponse(404, {
        errorCode: 'E0000007',
        errorSummary: 'Not Found'
      });

      try {
        await processor.verifyRpIdDomain(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.verifyRpIdDomain(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 202 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(202, '');

      const result = await processor.verifyRpIdDomain(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.verifyRpIdDomain(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  // Additional tests for edge cases on methods that didn't have them
  describe('Additional coverage tests', () => {
    it('getAuthenticatorMethod - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.getAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('getAuthenticatorMethod - should handle 201 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(201, {
        id: 'method123',
        type: 'webauthn'
      });

      const result = await processor.getAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('getAuthenticatorMethod - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(500, {
        errorCode: 'E0000009',
        errorSummary: 'Internal Server Error'
      });

      try {
        await processor.getAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });

    it('getCustomAAGUID - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.getCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('getCustomAAGUID - should handle 202 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(202, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Test'
      });

      const result = await processor.getCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('getCustomAAGUID - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(501, {
        errorCode: 'E0000009'
      });

      try {
        await processor.getCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(501);
      }
    });

    it('getWellKnownAppAuthenticatorConfiguration - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.getWellKnownAppAuthenticatorConfiguration(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('getWellKnownAppAuthenticatorConfiguration - should handle 201 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(201, [{
        oauthClientId: 'client123'
      }]);

      const result = await processor.getWellKnownAppAuthenticatorConfiguration(mockResponse as any);
      expect(result).to.exist;
    });

    it('getWellKnownAppAuthenticatorConfiguration - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(502, {
        errorCode: 'E0000009'
      });

      try {
        await processor.getWellKnownAppAuthenticatorConfiguration(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(502);
      }
    });

    it('listAllCustomAAGUIDs - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.listAllCustomAAGUIDs(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('listAllCustomAAGUIDs - should handle 202 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(202, {
        aaguids: []
      });

      const result = await processor.listAllCustomAAGUIDs(mockResponse as any);
      expect(result).to.exist;
    });

    it('listAllCustomAAGUIDs - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(503, {
        errorCode: 'E0000009'
      });

      try {
        await processor.listAllCustomAAGUIDs(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(503);
      }
    });

    it('listAuthenticatorMethods - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.listAuthenticatorMethods(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('listAuthenticatorMethods - should handle 201 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(201, [
        { id: 'method1', type: 'webauthn' }
      ]);

      const result = await processor.listAuthenticatorMethods(mockResponse as any);
      expect(result).to.exist;
    });

    it('listAuthenticatorMethods - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(504, {
        errorCode: 'E0000009'
      });

      try {
        await processor.listAuthenticatorMethods(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(504);
      }
    });

    it('listAuthenticators - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.listAuthenticators(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('listAuthenticators - should handle 202 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(202, [
        { id: 'aut1', type: 'email' }
      ]);

      const result = await processor.listAuthenticators(mockResponse as any);
      expect(result).to.exist;
    });

    it('listAuthenticators - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(505, {
        errorCode: 'E0000009'
      });

      try {
        await processor.listAuthenticators(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(505);
      }
    });

    it('replaceAuthenticator - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.replaceAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('replaceAuthenticator - should handle 201 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(201, {
        id: 'aut123',
        type: 'email'
      });

      const result = await processor.replaceAuthenticator(mockResponse as any);
      expect(result).to.exist;
    });

    it('replaceAuthenticator - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(506, {
        errorCode: 'E0000009'
      });

      try {
        await processor.replaceAuthenticator(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(506);
      }
    });

    it('replaceAuthenticatorMethod - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.replaceAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('replaceAuthenticatorMethod - should handle 202 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(202, {
        id: 'method123',
        type: 'webauthn'
      });

      const result = await processor.replaceAuthenticatorMethod(mockResponse as any);
      expect(result).to.exist;
    });

    it('replaceAuthenticatorMethod - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(507, {
        errorCode: 'E0000009'
      });

      try {
        await processor.replaceAuthenticatorMethod(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(507);
      }
    });

    it('replaceCustomAAGUID - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.replaceCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('replaceCustomAAGUID - should handle 201 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(201, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Updated'
      });

      const result = await processor.replaceCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('replaceCustomAAGUID - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(508, {
        errorCode: 'E0000009'
      });

      try {
        await processor.replaceCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(508);
      }
    });

    it('updateCustomAAGUID - should throw 429 error', async () => {
      const mockResponse = createMockResponse(429, {
        errorCode: 'E0000047',
        errorSummary: 'Too Many Requests'
      });

      try {
        await processor.updateCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('updateCustomAAGUID - should handle 202 response (2xx fallback)', async () => {
      const mockResponse = createMockResponse(202, {
        aaguid: '12345678-1234-1234-1234-123456789012',
        name: 'Patched'
      });

      const result = await processor.updateCustomAAGUID(mockResponse as any);
      expect(result).to.exist;
    });

    it('updateCustomAAGUID - should throw error for unknown status code', async () => {
      const mockResponse = createMockResponse(509, {
        errorCode: 'E0000009'
      });

      try {
        await processor.updateCustomAAGUID(mockResponse as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(509);
      }
    });
  });
});
