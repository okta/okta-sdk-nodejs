import { expect } from 'chai';
import { SessionApiResponseProcessor } from '../../src/generated/apis/SessionApi';

describe('SessionApi Unit Tests - Response Processors', () => {
  let responseProcessor: SessionApiResponseProcessor;

  beforeEach(() => {
    responseProcessor = new SessionApiResponseProcessor();
  });

  // Helper function to create mock response
  const createMockResponse = (statusCode: number, bodyText: string, contentType: string = 'application/json') => {
    return {
      httpStatusCode: statusCode,
      headers: {
        'content-type': contentType
      },
      body: {
        text: async () => bodyText
      },
      getBodyAsAny: async () => JSON.parse(bodyText)
    };
  };

  describe('closeCurrentSession Response Processor (lines 241-255)', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204, '');
      const result = await responseProcessor.closeCurrentSession(response as any);
      expect(result).to.be.undefined;
    });

    it('should handle 404 Not Found with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000007',
        errorSummary: 'Not found',
        errorLink: 'E0000007',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(404, errorBody);

      try {
        await responseProcessor.closeCurrentSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(404);
        expect(err.message).to.include('Not Found');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(202, '{}');
      const result = await responseProcessor.closeCurrentSession(response as any);
      expect(result).to.exist;
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(500, JSON.stringify({ error: 'Internal Server Error' }));

      try {
        await responseProcessor.closeCurrentSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });

  describe('createSession Response Processor (lines 264-288)', () => {
    it('should handle 200 OK with Session object', async () => {
      const sessionBody = JSON.stringify({
        id: 'test-session-id',
        userId: 'test-user-id',
        login: 'test@example.com',
        status: 'ACTIVE'
      });
      const response = createMockResponse(200, sessionBody);
      const result = await responseProcessor.createSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request', async () => {
      const response = createMockResponse(400, '');

      try {
        await responseProcessor.createSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(400);
        expect(err.message).to.include('Bad Request');
      }
    });

    it('should handle 403 Forbidden with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000006',
        errorSummary: 'Forbidden',
        errorLink: 'E0000006',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(403, errorBody);

      try {
        await responseProcessor.createSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(403);
        expect(err.message).to.include('Forbidden');
      }
    });

    it('should handle 429 Too Many Requests with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000047',
        errorSummary: 'Too many requests',
        errorLink: 'E0000047',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(429, errorBody);

      try {
        await responseProcessor.createSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(429);
        expect(err.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const sessionBody = JSON.stringify({
        id: 'test-session-id',
        userId: 'test-user-id'
      });
      const response = createMockResponse(201, sessionBody);
      const result = await responseProcessor.createSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(500, JSON.stringify({ error: 'Server error' }));

      try {
        await responseProcessor.createSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });

  describe('getCurrentSession Response Processor (lines 295-309)', () => {
    it('should handle 200 OK with Session object', async () => {
      const sessionBody = JSON.stringify({
        id: 'current-session-id',
        userId: 'user-id',
        status: 'ACTIVE'
      });
      const response = createMockResponse(200, sessionBody);
      const result = await responseProcessor.getCurrentSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 404 Not Found', async () => {
      const response = createMockResponse(404, '');

      try {
        await responseProcessor.getCurrentSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(404);
        expect(err.message).to.include('Not Found');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const sessionBody = JSON.stringify({
        id: 'session-id',
        userId: 'user-id'
      });
      const response = createMockResponse(206, sessionBody);
      const result = await responseProcessor.getCurrentSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(503, JSON.stringify({ error: 'Service unavailable' }));

      try {
        await responseProcessor.getCurrentSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });

  describe('getSession Response Processor (lines 318-343)', () => {
    it('should handle 200 OK with Session object', async () => {
      const sessionBody = JSON.stringify({
        id: 'get-session-id',
        userId: 'user-id',
        status: 'ACTIVE'
      });
      const response = createMockResponse(200, sessionBody);
      const result = await responseProcessor.getSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request', async () => {
      const response = createMockResponse(400, '');

      try {
        await responseProcessor.getSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(400);
        expect(err.message).to.include('Bad Request');
      }
    });

    it('should handle 403 Forbidden with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000006',
        errorSummary: 'Forbidden',
        errorLink: 'E0000006',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(403, errorBody);

      try {
        await responseProcessor.getSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(403);
        expect(err.message).to.include('Forbidden');
      }
    });

    it('should handle 404 Not Found', async () => {
      const response = createMockResponse(404, '');

      try {
        await responseProcessor.getSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(404);
        expect(err.message).to.include('Not Found');
      }
    });

    it('should handle 429 Too Many Requests with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000047',
        errorSummary: 'Rate limit exceeded',
        errorLink: 'E0000047',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(429, errorBody);

      try {
        await responseProcessor.getSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(429);
        expect(err.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const sessionBody = JSON.stringify({
        id: 'session-id',
        userId: 'user-id'
      });
      const response = createMockResponse(207, sessionBody);
      const result = await responseProcessor.getSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(501, JSON.stringify({ error: 'Not implemented' }));

      try {
        await responseProcessor.getSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });

  describe('refreshCurrentSession Response Processor (lines 352-366)', () => {
    it('should handle 200 OK with Session object', async () => {
      const sessionBody = JSON.stringify({
        id: 'refreshed-session-id',
        userId: 'user-id',
        status: 'ACTIVE',
        expiresAt: '2026-02-15T00:00:00.000Z'
      });
      const response = createMockResponse(200, sessionBody);
      const result = await responseProcessor.refreshCurrentSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 404 Not Found', async () => {
      const response = createMockResponse(404, '');

      try {
        await responseProcessor.refreshCurrentSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(404);
        expect(err.message).to.include('Not Found');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const sessionBody = JSON.stringify({
        id: 'session-id',
        userId: 'user-id'
      });
      const response = createMockResponse(203, sessionBody);
      const result = await responseProcessor.refreshCurrentSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(504, JSON.stringify({ error: 'Gateway timeout' }));

      try {
        await responseProcessor.refreshCurrentSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });

  describe('refreshSession Response Processor (lines 375-397)', () => {
    it('should handle 200 OK with Session object', async () => {
      const sessionBody = JSON.stringify({
        id: 'refresh-session-id',
        userId: 'user-id',
        status: 'ACTIVE',
        expiresAt: '2026-02-15T00:00:00.000Z'
      });
      const response = createMockResponse(200, sessionBody);
      const result = await responseProcessor.refreshSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 403 Forbidden with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000006',
        errorSummary: 'Forbidden',
        errorLink: 'E0000006',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(403, errorBody);

      try {
        await responseProcessor.refreshSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(403);
        expect(err.message).to.include('Forbidden');
      }
    });

    it('should handle 404 Not Found', async () => {
      const response = createMockResponse(404, '');

      try {
        await responseProcessor.refreshSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(404);
        expect(err.message).to.include('Not Found');
      }
    });

    it('should handle 429 Too Many Requests with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000047',
        errorSummary: 'Rate limit exceeded',
        errorLink: 'E0000047',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(429, errorBody);

      try {
        await responseProcessor.refreshSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(429);
        expect(err.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const sessionBody = JSON.stringify({
        id: 'session-id',
        userId: 'user-id'
      });
      const response = createMockResponse(205, sessionBody);
      const result = await responseProcessor.refreshSession(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(502, JSON.stringify({ error: 'Bad gateway' }));

      try {
        await responseProcessor.refreshSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });

  describe('revokeSession Response Processor (lines 406-428)', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204, '');
      const result = await responseProcessor.revokeSession(response as any);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000006',
        errorSummary: 'Forbidden',
        errorLink: 'E0000006',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(403, errorBody);

      try {
        await responseProcessor.revokeSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(403);
        expect(err.message).to.include('Forbidden');
      }
    });

    it('should handle 404 Not Found with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000007',
        errorSummary: 'Not found',
        errorLink: 'E0000007',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(404, errorBody);

      try {
        await responseProcessor.revokeSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(404);
        expect(err.message).to.include('Not Found');
      }
    });

    it('should handle 429 Too Many Requests with ModelError', async () => {
      const errorBody = JSON.stringify({
        errorCode: 'E0000047',
        errorSummary: 'Rate limit exceeded',
        errorLink: 'E0000047',
        errorId: 'test-error-id'
      });
      const response = createMockResponse(429, errorBody);

      try {
        await responseProcessor.revokeSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.code).to.equal(429);
        expect(err.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(200, '{}');
      const result = await responseProcessor.revokeSession(response as any);
      expect(result).to.exist;
    });

    it('should handle unknown status code', async () => {
      const response = createMockResponse(500, JSON.stringify({ error: 'Internal error' }));

      try {
        await responseProcessor.revokeSession(response as any);
        expect.fail('Should have thrown ApiException');
      } catch (err: any) {
        expect(err.message).to.include('Unknown API Status Code');
      }
    });
  });
});
