import { expect } from 'chai';
import { UserAuthenticatorEnrollmentsApiResponseProcessor, UserAuthenticatorEnrollmentsApiRequestFactory } from '../../src/generated/apis/UserAuthenticatorEnrollmentsApi';

// Helper function to create mock response
function createMockResponse(statusCode: number, body: any, contentType = 'application/json') {
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

// Helper function to create mock configuration
function createMockConfiguration() {
  return {
    baseServer: {
      makeRequestContext: (path: string, method: string, vars?: any) => {
        return {
          setHeaderParam: () => {
            // no-op
          },
          setQueryParam: () => {
            // no-op
          },
          setBody: () => {
            // no-op
          },
          getUrl: () => path
        };
      }
    },
    authMethods: {
      apiToken: {
        applySecurityAuthentication: async () => {
          // no-op
        }
      },
      oauth2: {
        applySecurityAuthentication: async () => {
          // no-op
        }
      },
      'default': {
        applySecurityAuthentication: async () => {
          // no-op
        }
      }
    }
  };
}

describe('UserAuthenticatorEnrollmentsApi Unit Tests - Response Processors', () => {
  let responseProcessor: UserAuthenticatorEnrollmentsApiResponseProcessor;

  beforeEach(() => {
    responseProcessor = new UserAuthenticatorEnrollmentsApiResponseProcessor();
  });

  describe('createAuthenticatorEnrollment Request Factory', () => {
    it('should create request context with required parameters', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.createAuthenticatorEnrollment(
        'user-123',
        { authenticatorId: 'auth-123', profile: { phoneNumber: '+1234567890' } },
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should throw RequiredError when userId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.createAuthenticatorEnrollment(
          null as any,
          { authenticatorId: 'auth-123', profile: { phoneNumber: '+1234567890' } },
          mockConfig
        );
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when authenticator is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.createAuthenticatorEnrollment('user-123', null as any, mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });
  });

  describe('createAuthenticatorEnrollment Response Processor', () => {
    it('should handle 200 OK response', async () => {
      const enrollmentBody = { id: 'enrollment-123', status: 'ACTIVE' };
      const response: any = createMockResponse(200, enrollmentBody);

      const result = await responseProcessor.createAuthenticatorEnrollment(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.createAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
        expect(error.message).to.include('Bad Request');
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.createAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
        expect(error.message).to.include('Forbidden');
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.createAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
        expect(error.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const enrollmentBody = { id: 'enrollment-456', status: 'ACTIVE' };
      const response: any = createMockResponse(201, enrollmentBody);

      const result = await responseProcessor.createAuthenticatorEnrollment(response);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response: any = createMockResponse(500, { error: 'Internal Server Error' });

      try {
        await responseProcessor.createAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('createTacAuthenticatorEnrollment Request Factory', () => {
    it('should create request context with required parameters', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.createTacAuthenticatorEnrollment(
        'user-123',
        { authenticatorId: 'tac-123', profile: { multiUse: false, ttl: '60' } },
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should throw RequiredError when userId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.createTacAuthenticatorEnrollment(
          null as any,
          { authenticatorId: 'tac-123' },
          mockConfig
        );
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when authenticator is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.createTacAuthenticatorEnrollment('user-123', null as any, mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });
  });

  describe('createTacAuthenticatorEnrollment Response Processor', () => {
    it('should handle 200 OK response', async () => {
      const enrollmentBody = { id: 'tac-enrollment-123', status: 'ACTIVE' };
      const response: any = createMockResponse(200, enrollmentBody);

      const result = await responseProcessor.createTacAuthenticatorEnrollment(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.createTacAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
        expect(error.message).to.include('Bad Request');
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.createTacAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
        expect(error.message).to.include('Forbidden');
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.createTacAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
        expect(error.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const enrollmentBody = { id: 'tac-enrollment-456', status: 'ACTIVE' };
      const response: any = createMockResponse(201, enrollmentBody);

      const result = await responseProcessor.createTacAuthenticatorEnrollment(response);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response: any = createMockResponse(500, { error: 'Internal Server Error' });

      try {
        await responseProcessor.createTacAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deleteAuthenticatorEnrollment Request Factory', () => {
    it('should create request context with required parameters', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.deleteAuthenticatorEnrollment(
        'user-123',
        'enrollment-123',
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should throw RequiredError when userId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.deleteAuthenticatorEnrollment(null as any, 'enrollment-123', mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when enrollmentId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.deleteAuthenticatorEnrollment('user-123', null as any, mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });
  });

  describe('deleteAuthenticatorEnrollment Response Processor', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.deleteAuthenticatorEnrollment(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.deleteAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
        expect(error.message).to.include('Forbidden');
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.deleteAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
        expect(error.message).to.include('Not Found');
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.deleteAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
        expect(error.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(200, {});
      const result = await responseProcessor.deleteAuthenticatorEnrollment(response);
      expect(result).to.exist;
    });

    it('should handle unknown status code', async () => {
      const response: any = createMockResponse(500, { error: 'Internal Server Error' });

      try {
        await responseProcessor.deleteAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('getAuthenticatorEnrollment Request Factory', () => {
    it('should create request context with required parameters', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.getAuthenticatorEnrollment(
        'user-123',
        'enrollment-123',
        undefined,
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should handle discloseIdentifiers parameter', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.getAuthenticatorEnrollment(
        'user-123',
        'enrollment-123',
        ['phone'],
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should throw RequiredError when userId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.getAuthenticatorEnrollment(
          null as any,
          'enrollment-123',
          undefined,
          mockConfig
        );
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when enrollmentId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.getAuthenticatorEnrollment('user-123', null as any, undefined, mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });
  });

  describe('getAuthenticatorEnrollment Response Processor', () => {
    it('should handle 200 OK response', async () => {
      const enrollmentBody = { id: 'enrollment-123', status: 'ACTIVE' };
      const response: any = createMockResponse(200, enrollmentBody);

      const result = await responseProcessor.getAuthenticatorEnrollment(response);
      expect(result).to.be.an('object');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.getAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
        expect(error.message).to.include('Forbidden');
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.getAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
        expect(error.message).to.include('Not Found');
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.getAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
        expect(error.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const enrollmentBody = { id: 'enrollment-456', status: 'ACTIVE' };
      const response: any = createMockResponse(201, enrollmentBody);

      const result = await responseProcessor.getAuthenticatorEnrollment(response);
      expect(result).to.be.an('object');
    });

    it('should handle unknown status code', async () => {
      const response: any = createMockResponse(500, { error: 'Internal Server Error' });

      try {
        await responseProcessor.getAuthenticatorEnrollment(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('listAuthenticatorEnrollments Request Factory', () => {
    it('should create request context with required parameters', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.listAuthenticatorEnrollments(
        'user-123',
        undefined,
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should handle discloseIdentifiers parameter', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.listAuthenticatorEnrollments(
        'user-123',
        ['phone'],
        mockConfig
      );
      expect(requestContext).to.exist;
    });

    it('should throw RequiredError when userId is null', async () => {
      const requestFactory = new UserAuthenticatorEnrollmentsApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.listAuthenticatorEnrollments(null as any, undefined, mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });
  });

  describe('listAuthenticatorEnrollments Response Processor', () => {
    it('should handle 200 OK response', async () => {
      const enrollmentsBody = { id: 'enrollment-123', status: 'ACTIVE' };
      const response: any = createMockResponse(200, enrollmentsBody);

      const result = await responseProcessor.listAuthenticatorEnrollments(response);
      expect(result).to.exist;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.listAuthenticatorEnrollments(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
        expect(error.message).to.include('Forbidden');
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.listAuthenticatorEnrollments(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
        expect(error.message).to.include('Not Found');
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.listAuthenticatorEnrollments(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
        expect(error.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const enrollmentsBody = { id: 'enrollment-456', status: 'ACTIVE' };
      const response: any = createMockResponse(201, enrollmentsBody);

      const result = await responseProcessor.listAuthenticatorEnrollments(response);
      expect(result).to.exist;
    });

    it('should handle unknown status code', async () => {
      const response: any = createMockResponse(500, { error: 'Internal Server Error' });

      try {
        await responseProcessor.listAuthenticatorEnrollments(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(500);
      }
    });
  });
});
