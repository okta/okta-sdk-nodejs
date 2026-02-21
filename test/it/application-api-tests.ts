import { expect } from 'chai';
import { ApplicationApiResponseProcessor } from '../../src/generated/apis/ApplicationApi';

// Helper function to create mock response objects
function createMockResponse(statusCode: number, body?: any, contentType: string = 'application/json') {
  return {
    httpStatusCode: statusCode,
    headers: { 'content-type': contentType },
    body: {
      text: async () => typeof body === 'string' ? body : JSON.stringify(body),
    },
    getBodyAsAny: async () => body
  };
}

describe('ApplicationApi Unit Tests - Response Processors', () => {
  let processor: ApplicationApiResponseProcessor;

  beforeEach(() => {
    processor = new ApplicationApiResponseProcessor();
  });

  describe('activateApplication', () => {
    it('should handle 200 success response', async () => {
      const response = createMockResponse(200);
      const result = await processor.activateApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.activateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.activateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.activateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });

    it('should handle 2xx fallback response', async () => {
      const response = createMockResponse(202, {});
      const result = await processor.activateApplication(response);
      expect(result).to.exist;
    });

    it('should throw error on unknown status code', async () => {
      const response = createMockResponse(500, { error: 'Internal Server Error' });
      try {
        await processor.activateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(500);
      }
    });
  });

  describe('deactivateApplication', () => {
    it('should handle 200 success response', async () => {
      const response = createMockResponse(200);
      const result = await processor.deactivateApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.deactivateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.deactivateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.deactivateApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('createApplication', () => {
    it('should handle 200 success response with application', async () => {
      const appBody = { id: 'app123', name: 'test-app', status: 'ACTIVE' };
      const response = createMockResponse(200, appBody);
      const result = await processor.createApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.createApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.createApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.createApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('deleteApplication', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.deleteApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.deleteApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.deleteApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.deleteApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('getApplication', () => {
    it('should handle 200 success response with application', async () => {
      const appBody = { id: 'app123', name: 'test-app', status: 'ACTIVE' };
      const response = createMockResponse(200, appBody);
      const result = await processor.getApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('replaceApplication', () => {
    it('should handle 200 success response with updated application', async () => {
      const appBody = { id: 'app123', name: 'updated-app', status: 'ACTIVE' };
      const response = createMockResponse(200, appBody);
      const result = await processor.replaceApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.replaceApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.replaceApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.replaceApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('listApplications', () => {
    it('should handle 200 success response with applications array', async () => {
      const appsBody = [
        { id: 'app1', name: 'app-1' },
        { id: 'app2', name: 'app-2' }
      ];
      const response = createMockResponse(200, appsBody);
      const result = await processor.listApplications(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listApplications(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listApplications(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('assignUserToApplication', () => {
    it('should handle 200 success response with app user', async () => {
      const userBody = { id: 'user123', scope: 'USER' };
      const response = createMockResponse(200, userBody);
      const result = await processor.assignUserToApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.assignUserToApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.assignUserToApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.assignUserToApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getApplicationUser', () => {
    it('should handle 200 success response with app user', async () => {
      const userBody = { id: 'user123', scope: 'USER' };
      const response = createMockResponse(200, userBody);
      const result = await processor.getApplicationUser(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getApplicationUser(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getApplicationUser(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getApplicationUser(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('listApplicationUsers', () => {
    it('should handle 200 success response with users array', async () => {
      const usersBody = [
        { id: 'user1', scope: 'USER' },
        { id: 'user2', scope: 'GROUP' }
      ];
      const response = createMockResponse(200, usersBody);
      const result = await processor.listApplicationUsers(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listApplicationUsers(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listApplicationUsers(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listApplicationUsers(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('unassignUserFromApplication', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.unassignUserFromApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.unassignUserFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.unassignUserFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.unassignUserFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('updateApplicationUser', () => {
    it('should handle 200 success response with updated user', async () => {
      const userBody = { id: 'user123', scope: 'USER' };
      const response = createMockResponse(200, userBody);
      const result = await processor.updateApplicationUser(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.updateApplicationUser(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.updateApplicationUser(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.updateApplicationUser(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('assignGroupToApplication', () => {
    it('should handle 200 success response with group assignment', async () => {
      const groupBody = { id: 'group123', priority: 0 };
      const response = createMockResponse(200, groupBody);
      const result = await processor.assignGroupToApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.assignGroupToApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.assignGroupToApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.assignGroupToApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getApplicationGroupAssignment', () => {
    it('should handle 200 success response with group assignment', async () => {
      const groupBody = { id: 'group123', priority: 0 };
      const response = createMockResponse(200, groupBody);
      const result = await processor.getApplicationGroupAssignment(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getApplicationGroupAssignment(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getApplicationGroupAssignment(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getApplicationGroupAssignment(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('listApplicationGroupAssignments', () => {
    it('should handle 200 success response with group assignments array', async () => {
      const groupsBody = [
        { id: 'group1', priority: 0 },
        { id: 'group2', priority: 1 }
      ];
      const response = createMockResponse(200, groupsBody);
      const result = await processor.listApplicationGroupAssignments(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listApplicationGroupAssignments(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listApplicationGroupAssignments(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listApplicationGroupAssignments(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('unassignApplicationFromGroup', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.unassignApplicationFromGroup(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.unassignApplicationFromGroup(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.unassignApplicationFromGroup(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.unassignApplicationFromGroup(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('generateApplicationKey', () => {
    it('should handle 201 Created response with key', async () => {
      const keyBody = { kid: 'key123', kty: 'RSA', x5c: ['cert'] };
      const response = createMockResponse(201, keyBody);
      const result = await processor.generateApplicationKey(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.generateApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.generateApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.generateApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getApplicationKey', () => {
    it('should handle 200 success response with key', async () => {
      const keyBody = { kid: 'key123', kty: 'RSA', x5c: ['cert'] };
      const response = createMockResponse(200, keyBody);
      const result = await processor.getApplicationKey(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('listApplicationKeys', () => {
    it('should handle 200 success response with keys array', async () => {
      const keysBody = [
        { kid: 'key1', kty: 'RSA' },
        { kid: 'key2', kty: 'RSA' }
      ];
      const response = createMockResponse(200, keysBody);
      const result = await processor.listApplicationKeys(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listApplicationKeys(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listApplicationKeys(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listApplicationKeys(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('cloneApplicationKey', () => {
    it('should handle 201 Created response with cloned key', async () => {
      const keyBody = { kid: 'key123', kty: 'RSA', x5c: ['cert'] };
      const response = createMockResponse(201, keyBody);
      const result = await processor.cloneApplicationKey(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.cloneApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.cloneApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.cloneApplicationKey(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('listFeaturesForApplication', () => {
    it('should handle 200 success response with features array', async () => {
      const featuresBody = [
        { name: 'feature1', status: 'ENABLED' },
        { name: 'feature2', status: 'DISABLED' }
      ];
      const response = createMockResponse(200, featuresBody);
      const result = await processor.listFeaturesForApplication(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listFeaturesForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listFeaturesForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listFeaturesForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('getFeatureForApplication', () => {
    it('should handle 200 success response with feature', async () => {
      const featureBody = { name: 'feature1', status: 'ENABLED' };
      const response = createMockResponse(200, featureBody);
      const result = await processor.getFeatureForApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getFeatureForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getFeatureForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getFeatureForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('updateFeatureForApplication', () => {
    it('should handle 200 success response with updated feature', async () => {
      const featureBody = { name: 'feature1', status: 'ENABLED' };
      const response = createMockResponse(200, featureBody);
      const result = await processor.updateFeatureForApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.updateFeatureForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.updateFeatureForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.updateFeatureForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('listOAuth2TokensForApplication', () => {
    it('should handle 200 success response with tokens array', async () => {
      const tokensBody = [
        { id: 'token1', status: 'ACTIVE' },
        { id: 'token2', status: 'ACTIVE' }
      ];
      const response = createMockResponse(200, tokensBody);
      const result = await processor.listOAuth2TokensForApplication(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listOAuth2TokensForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listOAuth2TokensForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listOAuth2TokensForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('getOAuth2TokenForApplication', () => {
    it('should handle 200 success response with token', async () => {
      const tokenBody = { id: 'token1', status: 'ACTIVE' };
      const response = createMockResponse(200, tokenBody);
      const result = await processor.getOAuth2TokenForApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getOAuth2TokenForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getOAuth2TokenForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getOAuth2TokenForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('revokeOAuth2TokenForApplication', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.revokeOAuth2TokenForApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.revokeOAuth2TokenForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.revokeOAuth2TokenForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.revokeOAuth2TokenForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('revokeOAuth2TokensForApplication', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.revokeOAuth2TokensForApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.revokeOAuth2TokensForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.revokeOAuth2TokensForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.revokeOAuth2TokensForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('listScopeConsentGrants', () => {
    it('should handle 200 success response with grants array', async () => {
      const grantsBody = [
        { id: 'grant1', scopeId: 'scope1' },
        { id: 'grant2', scopeId: 'scope2' }
      ];
      const response = createMockResponse(200, grantsBody);
      const result = await processor.listScopeConsentGrants(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listScopeConsentGrants(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listScopeConsentGrants(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listScopeConsentGrants(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('grantConsentToScope', () => {
    it('should handle 201 Created response with grant', async () => {
      const grantBody = { id: 'grant1', scopeId: 'scope1' };
      const response = createMockResponse(201, grantBody);
      const result = await processor.grantConsentToScope(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.grantConsentToScope(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.grantConsentToScope(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.grantConsentToScope(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getScopeConsentGrant', () => {
    it('should handle 200 success response with grant', async () => {
      const grantBody = { id: 'grant1', scopeId: 'scope1' };
      const response = createMockResponse(200, grantBody);
      const result = await processor.getScopeConsentGrant(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getScopeConsentGrant(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getScopeConsentGrant(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getScopeConsentGrant(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('revokeScopeConsentGrant', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.revokeScopeConsentGrant(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.revokeScopeConsentGrant(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.revokeScopeConsentGrant(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.revokeScopeConsentGrant(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('generateCsrForApplication', () => {
    it('should handle 201 Created response with CSR', async () => {
      const csrBody = { id: 'csr123', csr: 'CERT_DATA' };
      const response = createMockResponse(201, csrBody);
      const result = await processor.generateCsrForApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.generateCsrForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.generateCsrForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.generateCsrForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getCsrForApplication', () => {
    it('should handle 200 success response with CSR', async () => {
      const csrBody = { id: 'csr123', csr: 'CERT_DATA' };
      const response = createMockResponse(200, csrBody);
      const result = await processor.getCsrForApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.getCsrForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.getCsrForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.getCsrForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('listCsrsForApplication', () => {
    it('should handle 200 success response with CSRs array', async () => {
      const csrsBody = [
        { id: 'csr1', csr: 'CERT_DATA_1' },
        { id: 'csr2', csr: 'CERT_DATA_2' }
      ];
      const response = createMockResponse(200, csrsBody);
      const result = await processor.listCsrsForApplication(response);
      expect(result).to.be.an('array');
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.listCsrsForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.listCsrsForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.listCsrsForApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('revokeCsrFromApplication', () => {
    it('should handle 204 No Content response', async () => {
      const response = createMockResponse(204);
      const result = await processor.revokeCsrFromApplication(response);
      expect(result).to.not.exist;
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.revokeCsrFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.revokeCsrFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const errorBody = { errorCode: 'E0000047', errorSummary: 'Too Many Requests' };
      const response = createMockResponse(429, errorBody);
      try {
        await processor.revokeCsrFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('publishCsrFromApplication', () => {
    it('should handle 201 Created response with published key', async () => {
      const keyBody = { kid: 'key123', kty: 'RSA', x5c: ['cert'] };
      const response = createMockResponse(201, keyBody);
      const result = await processor.publishCsrFromApplication(response);
      expect(result).to.be.an('object');
    });

    it('should throw error on 400 Bad Request', async () => {
      const errorBody = { errorCode: 'E0000001', errorSummary: 'Bad Request' };
      const response = createMockResponse(400, errorBody);
      try {
        await processor.publishCsrFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const errorBody = { errorCode: 'E0000006', errorSummary: 'Forbidden' };
      const response = createMockResponse(403, errorBody);
      try {
        await processor.publishCsrFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const errorBody = { errorCode: 'E0000007', errorSummary: 'Not Found' };
      const response = createMockResponse(404, errorBody);
      try {
        await processor.publishCsrFromApplication(response);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(404);
      }
    });
  });
});
