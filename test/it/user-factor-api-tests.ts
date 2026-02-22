import { expect } from 'chai';
import { UserFactorApiResponseProcessor } from '../../src/generated/apis/UserFactorApi';
import { ResponseContext } from '../../src/types/generated';

// Helper function to create mock response
function createMockResponse(statusCode: number, body?: any, contentType = 'application/json') {
  const headers: Record<string, string> = {
    'content-type': contentType
  };

  return {
    httpStatusCode: statusCode,
    headers: headers,
    body: {
      text: async () => {
        if (body === '' || body === null || body === undefined) {
          return '';
        }
        return typeof body === 'string' ? body : JSON.stringify(body);
      }
    },
    getBodyAsAny: async () => body
  };
}

describe('UserFactorApi Response Processors - Unit Tests', () => {
  let processor: UserFactorApiResponseProcessor;

  beforeEach(() => {
    processor = new UserFactorApiResponseProcessor();
  });

  describe('activateFactor', () => {
    it('should process 200 OK response', async () => {
      const mockFactor = {
        id: 'factor123',
        factorType: 'token:software:totp',
        provider: 'OKTA',
        status: 'ACTIVE'
      };
      const response = createMockResponse(200, mockFactor);
      const result = await processor.activateFactor(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.activateFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.activateFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.activateFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(202, {});
      const result = await processor.activateFactor(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.activateFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('enrollFactor', () => {
    it('should process 200 OK response', async () => {
      const mockFactor = {
        id: 'factor456',
        factorType: 'question',
        provider: 'OKTA',
        status: 'ACTIVE'
      };
      const response = createMockResponse(200, mockFactor);
      const result = await processor.enrollFactor(response);
      expect(result).to.be.an('object');
    });

    it('should process 400 Bad Request response', async () => {
      const mockError = { errorCode: 'E0000001', errorSummary: 'Invalid factor' };
      const response = createMockResponse(400, mockError);
      try {
        await processor.enrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.enrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'User not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.enrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.enrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(201, {});
      const result = await processor.enrollFactor(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.enrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('getFactor', () => {
    it('should process 200 OK response', async () => {
      const mockFactor = {
        id: 'factor789',
        factorType: 'sms',
        provider: 'OKTA',
        status: 'ACTIVE',
        profile: { phoneNumber: '+1234567890' }
      };
      const response = createMockResponse(200, mockFactor);
      const result = await processor.getFactor(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.getFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Factor not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.getFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.getFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, {});
      const result = await processor.getFactor(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.getFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('getFactorTransactionStatus', () => {
    it('should process 200 OK response', async () => {
      const mockTransaction = {
        factorResult: 'SUCCESS',
        _embedded: {
          factor: { id: 'factor123', factorType: 'push' }
        }
      };
      const response = createMockResponse(200, mockTransaction);
      const result = await processor.getFactorTransactionStatus(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.getFactorTransactionStatus(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Transaction not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.getFactorTransactionStatus(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.getFactorTransactionStatus(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, {});
      const result = await processor.getFactorTransactionStatus(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(503, { error: 'Service Unavailable' });
      try {
        await processor.getFactorTransactionStatus(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('getYubikeyOtpTokenById', () => {
    it('should process 200 OK response', async () => {
      const mockToken = {
        id: 'token123',
        serial: 'YUBIKEY123',
        created: '2024-01-01T00:00:00.000Z'
      };
      const response = createMockResponse(200, mockToken);
      const result = await processor.getYubikeyOtpTokenById(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.getYubikeyOtpTokenById(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Token not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.getYubikeyOtpTokenById(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.getYubikeyOtpTokenById(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, {});
      const result = await processor.getYubikeyOtpTokenById(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.getYubikeyOtpTokenById(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('listFactors', () => {
    it('should process 200 OK response with factors', async () => {
      const mockFactors = [
        { id: 'factor1', factorType: 'question', status: 'ACTIVE' },
        { id: 'factor2', factorType: 'sms', status: 'ACTIVE' }
      ];
      const response = createMockResponse(200, mockFactors);
      const result = await processor.listFactors(response);
      expect(result).to.be.an('array');
    });

    it('should process 200 OK response with empty list', async () => {
      const response = createMockResponse(200, []);
      const result = await processor.listFactors(response);
      expect(result).to.be.an('array');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.listFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'User not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.listFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.listFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, []);
      const result = await processor.listFactors(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.listFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('listSupportedFactors', () => {
    it('should process 200 OK response with supported factors', async () => {
      const mockFactors = [
        { factorType: 'question', status: 'ACTIVE' },
        { factorType: 'sms', status: 'ACTIVE' },
        { factorType: 'token:software:totp', status: 'ACTIVE' }
      ];
      const response = createMockResponse(200, mockFactors);
      const result = await processor.listSupportedFactors(response);
      expect(result).to.be.an('array');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.listSupportedFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'User not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.listSupportedFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.listSupportedFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, []);
      const result = await processor.listSupportedFactors(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.listSupportedFactors(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('listSupportedSecurityQuestions', () => {
    it('should process 200 OK response with security questions', async () => {
      const mockQuestions = [
        { question: 'What is your favorite color?', questionText: 'What is your favorite color?' },
        { question: 'What is your pet\'s name?', questionText: 'What is your pet\'s name?' }
      ];
      const response = createMockResponse(200, mockQuestions);
      const result = await processor.listSupportedSecurityQuestions(response);
      expect(result).to.be.an('array');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.listSupportedSecurityQuestions(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'User not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.listSupportedSecurityQuestions(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.listSupportedSecurityQuestions(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, []);
      const result = await processor.listSupportedSecurityQuestions(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.listSupportedSecurityQuestions(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('listYubikeyOtpTokens', () => {
    it('should process 200 OK response with tokens', async () => {
      const mockTokens = [
        { id: 'token1', serial: 'YUBIKEY1' },
        { id: 'token2', serial: 'YUBIKEY2' }
      ];
      const response = createMockResponse(200, mockTokens);
      const result = await processor.listYubikeyOtpTokens(response);
      expect(result).to.be.an('array');
    });

    it('should process 200 OK response with empty list', async () => {
      const response = createMockResponse(200, []);
      const result = await processor.listYubikeyOtpTokens(response);
      expect(result).to.be.an('array');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.listYubikeyOtpTokens(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'User not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.listYubikeyOtpTokens(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.listYubikeyOtpTokens(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, []);
      const result = await processor.listYubikeyOtpTokens(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.listYubikeyOtpTokens(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('resendEnrollFactor', () => {
    it('should process 200 OK response', async () => {
      const mockFactor = {
        id: 'factor123',
        factorType: 'sms',
        provider: 'OKTA',
        status: 'PENDING_ACTIVATION'
      };
      const response = createMockResponse(200, mockFactor);
      const result = await processor.resendEnrollFactor(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.resendEnrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Factor not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.resendEnrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.resendEnrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(202, {});
      const result = await processor.resendEnrollFactor(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.resendEnrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('unenrollFactor', () => {
    it('should process 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.unenrollFactor(response);
      expect(result).to.be.undefined;
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.unenrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Factor not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.unenrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.unenrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, {});
      const result = await processor.unenrollFactor(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.unenrollFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('uploadYubikeyOtpTokenSeed', () => {
    it('should process 200 OK response', async () => {
      const mockToken = {
        id: 'token456',
        serial: 'YUBIKEY456',
        created: '2024-01-01T00:00:00.000Z'
      };
      const response = createMockResponse(200, mockToken);
      const result = await processor.uploadYubikeyOtpTokenSeed(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.uploadYubikeyOtpTokenSeed(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.uploadYubikeyOtpTokenSeed(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.uploadYubikeyOtpTokenSeed(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(201, {});
      const result = await processor.uploadYubikeyOtpTokenSeed(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.uploadYubikeyOtpTokenSeed(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });

  describe('verifyFactor', () => {
    it('should process 200 OK response', async () => {
      const mockVerification = {
        factorResult: 'SUCCESS',
        _embedded: {
          factor: { id: 'factor123', factorType: 'question' }
        }
      };
      const response = createMockResponse(200, mockVerification);
      const result = await processor.verifyFactor(response);
      expect(result).to.be.an('object');
    });

    it('should process 403 Forbidden response', async () => {
      const mockError = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, mockError);
      try {
        await processor.verifyFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should process 404 Not Found response', async () => {
      const mockError = { errorCode: 'E0000007', errorSummary: 'Factor not found' };
      const response = createMockResponse(404, mockError);
      try {
        await processor.verifyFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should process 429 Too Many Requests response', async () => {
      const mockError = { errorCode: 'E0000047', errorSummary: 'Rate limit exceeded' };
      const response = createMockResponse(429, mockError);
      try {
        await processor.verifyFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, {});
      const result = await processor.verifyFactor(response);
      expect(result).to.exist;
    });

    it('should throw exception for unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.verifyFactor(response);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).to.include('Unknown');
      }
    });
  });
});
