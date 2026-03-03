import { expect } from 'chai';
import { GroupApiResponseProcessor, GroupApiRequestFactory } from '../../src/generated/apis/GroupApi';

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

describe('GroupApi Unit Tests - Response Processors', () => {
  let responseProcessor: GroupApiResponseProcessor;

  beforeEach(() => {
    responseProcessor = new GroupApiResponseProcessor();
  });

  describe('getGroupRule Request Factory (lines 433-466)', () => {
    it('should create request context with required parameters', async () => {
      const requestFactory = new GroupApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.getGroupRule('rule-123', undefined, mockConfig);
      expect(requestContext).to.exist;
    });

    it('should throw RequiredError when ruleId is null', async () => {
      const requestFactory = new GroupApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      try {
        await requestFactory.getGroupRule(null as any, undefined, mockConfig);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should handle expand parameter', async () => {
      const requestFactory = new GroupApiRequestFactory();
      const mockConfig: any = createMockConfiguration();

      const requestContext = await requestFactory.getGroupRule('rule-123', 'expand-value', mockConfig);
      expect(requestContext).to.exist;
    });
  });

  describe('activateGroupRule Response Processor (lines 877-899)', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.activateGroupRule(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.activateGroupRule(response);
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
        await responseProcessor.activateGroupRule(response);
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
        await responseProcessor.activateGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
        expect(error.message).to.include('Too Many Requests');
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(201, '{}');
      const result = await responseProcessor.activateGroupRule(response);
      expect(result).to.exist;
    });

    it('should handle unknown status code', async () => {
      const response: any = createMockResponse(500, { error: 'Internal Server Error' });

      try {
        await responseProcessor.activateGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('assignGroupOwner Response Processor (lines 908-935)', () => {
    it('should handle 201 Created response', async () => {
      const ownerBody = { id: 'owner-123', type: 'USER' };
      const response: any = createMockResponse(201, ownerBody);

      const result = await responseProcessor.assignGroupOwner(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.assignGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.assignGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.assignGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.assignGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const ownerBody = { id: 'owner-456', type: 'USER' };
      const response: any = createMockResponse(200, ownerBody);

      const result = await responseProcessor.assignGroupOwner(response);
      expect(result).to.be.an('object');
    });
  });

  describe('assignUserToGroup Response Processor (lines 944-966)', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.assignUserToGroup(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.assignUserToGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.assignUserToGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.assignUserToGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(200, '{}');
      const result = await responseProcessor.assignUserToGroup(response);
      expect(result).to.exist;
    });
  });

  describe('createGroup Response Processor (lines 975-998)', () => {
    it('should handle 200 OK response', async () => {
      const groupBody = { id: 'group-123', profile: { name: 'Test Group' } };
      const response: any = createMockResponse(200, groupBody);

      const result = await responseProcessor.createGroup(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.createGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.createGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.createGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const groupBody = { id: 'group-456', profile: { name: 'Test Group 2' } };
      const response: any = createMockResponse(201, groupBody);

      const result = await responseProcessor.createGroup(response);
      expect(result).to.be.an('object');
    });
  });

  describe('createGroupRule Response Processor (lines 1007-1030)', () => {
    it('should handle 200 OK response', async () => {
      const ruleBody = { id: 'rule-123', name: 'Test Rule' };
      const response: any = createMockResponse(200, ruleBody);

      const result = await responseProcessor.createGroupRule(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.createGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.createGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.createGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const ruleBody = { id: 'rule-456', name: 'Test Rule 2' };
      const response: any = createMockResponse(201, ruleBody);

      const result = await responseProcessor.createGroupRule(response);
      expect(result).to.be.an('object');
    });
  });

  describe('deactivateGroupRule Response Processor (lines 1039-1061)', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.deactivateGroupRule(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.deactivateGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.deactivateGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.deactivateGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(200, '{}');
      const result = await responseProcessor.deactivateGroupRule(response);
      expect(result).to.exist;
    });
  });

  describe('deleteGroup Response Processor (lines 1071-1092)', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.deleteGroup(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.deleteGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.deleteGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.deleteGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(200, '{}');
      const result = await responseProcessor.deleteGroup(response);
      expect(result).to.exist;
    });
  });

  describe('deleteGroupOwner Response Processor (lines 1101-1123)', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.deleteGroupOwner(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.deleteGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.deleteGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.deleteGroupOwner(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(200, '{}');
      const result = await responseProcessor.deleteGroupOwner(response);
      expect(result).to.exist;
    });
  });

  describe('deleteGroupRule Response Processor (lines 1132-1154)', () => {
    it('should handle 202 Accepted response', async () => {
      const response: any = createMockResponse(202, '');
      const result = await responseProcessor.deleteGroupRule(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.deleteGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.deleteGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.deleteGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(201, '{}');
      const result = await responseProcessor.deleteGroupRule(response);
      expect(result).to.exist;
    });
  });

  describe('getGroup Response Processor (lines 1163-1186)', () => {
    it('should handle 200 OK response', async () => {
      const groupBody = { id: 'group-123', profile: { name: 'Test Group' } };
      const response: any = createMockResponse(200, groupBody);

      const result = await responseProcessor.getGroup(response);
      expect(result).to.be.an('object');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.getGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.getGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.getGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const groupBody = { id: 'group-456', profile: { name: 'Test Group 2' } };
      const response: any = createMockResponse(201, groupBody);

      const result = await responseProcessor.getGroup(response);
      expect(result).to.be.an('object');
    });
  });

  describe('getGroupRule Response Processor (lines 1195-1218)', () => {
    it('should handle 200 OK response', async () => {
      const ruleBody = { id: 'rule-123', name: 'Test Rule' };
      const response: any = createMockResponse(200, ruleBody);

      const result = await responseProcessor.getGroupRule(response);
      expect(result).to.be.an('object');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.getGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.getGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.getGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const ruleBody = { id: 'rule-456', name: 'Test Rule 2' };
      const response: any = createMockResponse(201, ruleBody);

      const result = await responseProcessor.getGroupRule(response);
      expect(result).to.be.an('object');
    });
  });

  describe('listAssignedApplicationsForGroup Response Processor (lines 1227-1250)', () => {
    it('should handle 200 OK response', async () => {
      const appsBody = [{ id: 'app-123', name: 'Test App' }];
      const response: any = createMockResponse(200, appsBody);

      const result = await responseProcessor.listAssignedApplicationsForGroup(response);
      expect(result).to.be.an('array');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.listAssignedApplicationsForGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.listAssignedApplicationsForGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.listAssignedApplicationsForGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const appsBody = [{ id: 'app-456', name: 'Test App 2' }];
      const response: any = createMockResponse(201, appsBody);

      const result = await responseProcessor.listAssignedApplicationsForGroup(response);
      expect(result).to.be.an('array');
    });
  });

  describe('listGroupOwners Response Processor (lines 1259-1282)', () => {
    it('should handle 200 OK response', async () => {
      const ownersBody = [{ id: 'owner-123', type: 'USER' }];
      const response: any = createMockResponse(200, ownersBody);

      const result = await responseProcessor.listGroupOwners(response);
      expect(result).to.be.an('array');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.listGroupOwners(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.listGroupOwners(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.listGroupOwners(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const ownersBody = [{ id: 'owner-456', type: 'USER' }];
      const response: any = createMockResponse(201, ownersBody);

      const result = await responseProcessor.listGroupOwners(response);
      expect(result).to.be.an('array');
    });
  });

  describe('listGroupRules Response Processor (lines 1291-1310)', () => {
    it('should handle 200 OK response', async () => {
      const rulesBody = [{ id: 'rule-123', name: 'Test Rule' }];
      const response: any = createMockResponse(200, rulesBody);

      const result = await responseProcessor.listGroupRules(response);
      expect(result).to.be.an('array');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.listGroupRules(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.listGroupRules(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const rulesBody = [{ id: 'rule-456', name: 'Test Rule 2' }];
      const response: any = createMockResponse(201, rulesBody);

      const result = await responseProcessor.listGroupRules(response);
      expect(result).to.be.an('array');
    });
  });

  describe('listGroupUsers Response Processor (lines 1319-1342)', () => {
    it('should handle 200 OK response', async () => {
      const usersBody = [{ id: 'user-123', profile: { login: 'test@example.com' } }];
      const response: any = createMockResponse(200, usersBody);

      const result = await responseProcessor.listGroupUsers(response);
      expect(result).to.be.an('array');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.listGroupUsers(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.listGroupUsers(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.listGroupUsers(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const usersBody = [{ id: 'user-456', profile: { login: 'test2@example.com' } }];
      const response: any = createMockResponse(201, usersBody);

      const result = await responseProcessor.listGroupUsers(response);
      expect(result).to.be.an('array');
    });
  });

  describe('listGroups Response Processor (lines 1351-1370)', () => {
    it('should handle 200 OK response', async () => {
      const groupsBody = [{ id: 'group-123', profile: { name: 'Test Group' } }];
      const response: any = createMockResponse(200, groupsBody);

      const result = await responseProcessor.listGroups(response);
      expect(result).to.be.an('array');
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.listGroups(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.listGroups(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const groupsBody = [{ id: 'group-456', profile: { name: 'Test Group 2' } }];
      const response: any = createMockResponse(201, groupsBody);

      const result = await responseProcessor.listGroups(response);
      expect(result).to.be.an('array');
    });
  });

  describe('replaceGroup Response Processor (lines 1379-1406)', () => {
    it('should handle 200 OK response', async () => {
      const groupBody = { id: 'group-123', profile: { name: 'Updated Group' } };
      const response: any = createMockResponse(200, groupBody);

      const result = await responseProcessor.replaceGroup(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.replaceGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.replaceGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.replaceGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.replaceGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const groupBody = { id: 'group-456', profile: { name: 'Updated Group 2' } };
      const response: any = createMockResponse(201, groupBody);

      const result = await responseProcessor.replaceGroup(response);
      expect(result).to.be.an('object');
    });
  });

  describe('replaceGroupRule Response Processor (lines 1416-1442)', () => {
    it('should handle 200 OK response', async () => {
      const ruleBody = { id: 'rule-123', name: 'Updated Rule' };
      const response: any = createMockResponse(200, ruleBody);

      const result = await responseProcessor.replaceGroupRule(response);
      expect(result).to.be.an('object');
    });

    it('should handle 400 Bad Request response', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response: any = createMockResponse(400, errorBody);

      try {
        await responseProcessor.replaceGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.replaceGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.replaceGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.replaceGroupRule(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const ruleBody = { id: 'rule-456', name: 'Updated Rule 2' };
      const response: any = createMockResponse(201, ruleBody);

      const result = await responseProcessor.replaceGroupRule(response);
      expect(result).to.be.an('object');
    });
  });

  describe('unassignUserFromGroup Response Processor (lines 1452-1476)', () => {
    it('should handle 204 No Content response', async () => {
      const response: any = createMockResponse(204, '');
      const result = await responseProcessor.unassignUserFromGroup(response);
      expect(result).to.be.undefined;
    });

    it('should handle 403 Forbidden response', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response: any = createMockResponse(403, errorBody);

      try {
        await responseProcessor.unassignUserFromGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should handle 404 Not Found response', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response: any = createMockResponse(404, errorBody);

      try {
        await responseProcessor.unassignUserFromGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should handle 429 Too Many Requests response', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response: any = createMockResponse(429, errorBody);

      try {
        await responseProcessor.unassignUserFromGroup(response);
        expect.fail('Should have thrown ApiException');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response: any = createMockResponse(200, '{}');
      const result = await responseProcessor.unassignUserFromGroup(response);
      expect(result).to.exist;
    });
  });
});
