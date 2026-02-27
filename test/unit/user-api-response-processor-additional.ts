import { expect } from 'chai';
import { UserApiResponseProcessor, UserApiRequestFactory } from '../../src/generated/apis/UserApi';

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

describe('UserApi - Additional Coverage', () => {
  let processor: UserApiResponseProcessor;
  let factory: UserApiRequestFactory;

  beforeEach(() => {
    processor = new UserApiResponseProcessor();
    factory = new UserApiRequestFactory();
  });

  // forgotPassword - comprehensive tests
  describe('forgotPassword', () => {
    it('should handle 200 with complete response', async () => {
      const mockBody = {
        resetPasswordUrl: 'https://example.okta.com/reset',
        expiresAt: '2026-02-14T12:00:00.000Z'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.forgotPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 202 accepted response', async () => {
      const mockBody = { resetPasswordUrl: 'https://example.com/reset' };
      const response = createMockResponse(202, mockBody);
      const result = await processor.forgotPassword(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 400 bad request', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Invalid user state' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw on 401 unauthorized', async () => {
      const mockBody = { errorCode: 'E0000004', errorSummary: 'Unauthorized' };
      const response = createMockResponse(401, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(401);
      }
    });

    it('should throw on 503 service unavailable', async () => {
      const mockBody = { error: 'Service temporarily unavailable' };
      const response = createMockResponse(503, mockBody);
      try {
        await processor.forgotPassword(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(503);
      }
    });

    it('should validate userId parameter', async () => {
      try {
        await factory.forgotPassword(null as any, true);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should validate userId as undefined', async () => {
      try {
        await factory.forgotPassword(undefined as any, true);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  // getIdentityProviderApplicationUser - comprehensive tests
  describe('getIdentityProviderApplicationUser', () => {
    it('should handle 200 with full user data', async () => {
      const mockBody = {
        id: 'idp123',
        externalId: 'ext456',
        created: '2026-01-01T00:00:00.000Z',
        lastUpdated: '2026-02-01T00:00:00.000Z',
        profile: { email: 'user@example.com' },
        _embedded: { user: { id: 'user789' } }
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getIdentityProviderApplicationUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 204 no content', async () => {
      const response = createMockResponse(204, {});
      const result = await processor.getIdentityProviderApplicationUser(response as any);
      expect(result).to.exist;
    });

    it('should throw on 400 invalid idp', async () => {
      const mockBody = { errorCode: 'E0000007', errorSummary: 'Invalid IDP ID' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.getIdentityProviderApplicationUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw on 409 conflict', async () => {
      const mockBody = { errorCode: 'E0000009', errorSummary: 'Conflict' };
      const response = createMockResponse(409, mockBody);
      try {
        await processor.getIdentityProviderApplicationUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(409);
      }
    });

    it('should validate idpId parameter', async () => {
      try {
        await factory.getIdentityProviderApplicationUser(null as any, 'user123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('idpId');
      }
    });

    it('should validate both parameters together', async () => {
      try {
        await factory.getIdentityProviderApplicationUser(undefined as any, undefined as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.match(/idpId|userId/);
      }
    });
  });

  // getUserClassification - comprehensive tests
  describe('getUserClassification', () => {
    it('should handle 200 with HIGH_VALUE classification', async () => {
      const mockBody = { classification: 'HIGH_VALUE' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 200 with LOW_VALUE classification', async () => {
      const mockBody = { classification: 'LOW_VALUE' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 206 partial content', async () => {
      const mockBody = { classification: 'MEDIUM_VALUE' };
      const response = createMockResponse(206, mockBody);
      const result = await processor.getUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 501 not implemented', async () => {
      const mockBody = { error: 'Classification not implemented' };
      const response = createMockResponse(501, mockBody);
      try {
        await processor.getUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(501);
      }
    });

    it('should throw on 502 bad gateway', async () => {
      const mockBody = { error: 'Bad gateway' };
      const response = createMockResponse(502, mockBody);
      try {
        await processor.getUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(502);
      }
    });
  });

  // getUserGrant - comprehensive tests
  describe('getUserGrant', () => {
    it('should handle 200 with full grant details', async () => {
      const mockBody = {
        id: 'grant123',
        status: 'ACTIVE',
        created: '2026-01-01T00:00:00.000Z',
        lastUpdated: '2026-02-01T00:00:00.000Z',
        issuer: 'https://example.okta.com',
        clientId: 'client456',
        userId: 'user789',
        scopeId: 'scope101112'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserGrant(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 299 edge 2xx response', async () => {
      const mockBody = { id: 'grant999' };
      const response = createMockResponse(299, mockBody);
      const result = await processor.getUserGrant(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 504 gateway timeout', async () => {
      const mockBody = { error: 'Gateway timeout' };
      const response = createMockResponse(504, mockBody);
      try {
        await processor.getUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(504);
      }
    });

    it('should validate grantId is not empty string', async () => {
      try {
        await factory.getUserGrant('user123', null as any, 'scope');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('grantId');
      }
    });
  });

  // getUserRisk - comprehensive tests
  describe('getUserRisk', () => {
    it('should handle 200 with HIGH risk', async () => {
      const mockBody = {
        level: 'HIGH',
        reasons: ['suspicious_activity', 'location_anomaly'],
        lastUpdated: '2026-02-13T10:00:00.000Z'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 200 with MEDIUM risk', async () => {
      const mockBody = { level: 'MEDIUM' };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 200 with LOW risk', async () => {
      const mockBody = { level: 'LOW', reasons: [] };
      const response = createMockResponse(200, mockBody);
      const result = await processor.getUserRisk(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 505 version not supported', async () => {
      const mockBody = { error: 'HTTP version not supported' };
      const response = createMockResponse(505, mockBody);
      try {
        await processor.getUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(505);
      }
    });

    it('should throw on 507 insufficient storage', async () => {
      const mockBody = { error: 'Insufficient storage' };
      const response = createMockResponse(507, mockBody);
      try {
        await processor.getUserRisk(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(507);
      }
    });
  });

  // linkUserToIdentityProvider - comprehensive tests
  describe('linkUserToIdentityProvider', () => {
    it('should handle 200 with successful link', async () => {
      const mockBody = {
        id: 'link123',
        externalId: 'ext789',
        idpId: 'idp456',
        userId: 'user321'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.linkUserToIdentityProvider(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 201 created', async () => {
      const mockBody = { id: 'link456', externalId: 'ext999' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.linkUserToIdentityProvider(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 409 already linked', async () => {
      const mockBody = { errorCode: 'E0000060', errorSummary: 'User already linked' };
      const response = createMockResponse(409, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(409);
      }
    });

    it('should throw on 422 unprocessable entity', async () => {
      const mockBody = { errorCode: 'E0000001', errorSummary: 'Invalid link request' };
      const response = createMockResponse(422, mockBody);
      try {
        await processor.linkUserToIdentityProvider(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(422);
      }
    });

    it('should validate userIdentityProviderLinkRequest', async () => {
      try {
        await factory.linkUserToIdentityProvider('idp123', 'user456', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userIdentityProviderLinkRequest');
      }
    });
  });

  // listGrantsForUserAndClient - comprehensive tests
  describe('listGrantsForUserAndClient', () => {
    it('should handle 200 with multiple grants', async () => {
      const mockBody = [
        { id: 'grant1', scopeId: 'scope1', status: 'ACTIVE' },
        { id: 'grant2', scopeId: 'scope2', status: 'ACTIVE' },
        { id: 'grant3', scopeId: 'scope3', status: 'EXPIRED' }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listGrantsForUserAndClient(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(3);
    });

    it('should handle 200 with empty array', async () => {
      const mockBody = [];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listGrantsForUserAndClient(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(0);
    });

    it('should handle 206 partial content', async () => {
      const mockBody = [{ id: 'grant1' }];
      const response = createMockResponse(206, mockBody);
      const result = await processor.listGrantsForUserAndClient(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 400 invalid parameters', async () => {
      const mockBody = { errorCode: 'E0000003', errorSummary: 'Invalid parameters' };
      const response = createMockResponse(400, mockBody);
      try {
        await processor.listGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(400);
      }
    });

    it('should validate clientId parameter', async () => {
      try {
        await factory.listGrantsForUserAndClient('user123', null as any, 'scope', 'after', 20);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });
  });

  // listIdentityProviderApplicationUsers - comprehensive tests
  describe('listIdentityProviderApplicationUsers', () => {
    it('should handle 200 with user list', async () => {
      const mockBody = [
        { id: 'user1', externalId: 'ext1' },
        { id: 'user2', externalId: 'ext2' }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listIdentityProviderApplicationUsers(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(2);
    });

    it('should handle 200 with single user', async () => {
      const mockBody = [{ id: 'user1', externalId: 'ext1' }];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listIdentityProviderApplicationUsers(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(1);
    });

    it('should handle 299 edge response', async () => {
      const mockBody = [{ id: 'user1' }];
      const response = createMockResponse(299, mockBody);
      const result = await processor.listIdentityProviderApplicationUsers(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 508 loop detected', async () => {
      const mockBody = { error: 'Loop detected' };
      const response = createMockResponse(508, mockBody);
      try {
        await processor.listIdentityProviderApplicationUsers(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(508);
      }
    });
  });

  // listRefreshTokensForUserAndClient - comprehensive tests
  describe('listRefreshTokensForUserAndClient', () => {
    it('should handle 200 with token list', async () => {
      const mockBody = [
        { id: 'token1', clientId: 'client1', created: '2026-01-01T00:00:00.000Z' },
        { id: 'token2', clientId: 'client1', created: '2026-01-15T00:00:00.000Z' }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listRefreshTokensForUserAndClient(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(2);
    });

    it('should handle 200 with empty tokens', async () => {
      const mockBody = [];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listRefreshTokensForUserAndClient(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(0);
    });

    it('should throw on 401 unauthorized access', async () => {
      const mockBody = { errorCode: 'E0000011', errorSummary: 'Invalid token' };
      const response = createMockResponse(401, mockBody);
      try {
        await processor.listRefreshTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(401);
      }
    });

    it('should throw on 509 bandwidth limit exceeded', async () => {
      const mockBody = { error: 'Bandwidth limit exceeded' };
      const response = createMockResponse(509, mockBody);
      try {
        await processor.listRefreshTokensForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(509);
      }
    });
  });

  // listSocialAuthTokens - comprehensive tests
  describe('listSocialAuthTokens', () => {
    it('should handle 200 with social tokens', async () => {
      const mockBody = [
        { id: 'social1', token: 'token1', scopes: ['profile', 'email'] },
        { id: 'social2', token: 'token2', scopes: ['openid'] }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listSocialAuthTokens(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(2);
    });

    it('should handle 204 no tokens', async () => {
      const mockBody = [];
      const response = createMockResponse(204, mockBody);
      const result = await processor.listSocialAuthTokens(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 410 gone', async () => {
      const mockBody = { error: 'Resource no longer available' };
      const response = createMockResponse(410, mockBody);
      try {
        await processor.listSocialAuthTokens(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(410);
      }
    });

    it('should validate both idpId and userId', async () => {
      try {
        await factory.listSocialAuthTokens(null as any, null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.match(/idpId|userId/);
      }
    });
  });

  // listUserBlocks - comprehensive tests
  describe('listUserBlocks', () => {
    it('should handle 200 with blocks', async () => {
      const mockBody = [
        { id: 'block1', reason: 'suspicious_activity', timestamp: '2026-02-01T00:00:00.000Z' },
        { id: 'block2', reason: 'failed_login_attempts', timestamp: '2026-02-10T00:00:00.000Z' }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserBlocks(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(2);
    });

    it('should handle 200 with no blocks', async () => {
      const mockBody = [];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserBlocks(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(0);
    });

    it('should throw on 412 precondition failed', async () => {
      const mockBody = { error: 'Precondition failed' };
      const response = createMockResponse(412, mockBody);
      try {
        await processor.listUserBlocks(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(412);
      }
    });
  });

  // listUserDevices - comprehensive tests
  describe('listUserDevices', () => {
    it('should handle 200 with multiple devices', async () => {
      const mockBody = [
        { id: 'device1', status: 'ACTIVE', platform: 'IOS' },
        { id: 'device2', status: 'ACTIVE', platform: 'ANDROID' },
        { id: 'device3', status: 'INACTIVE', platform: 'WINDOWS' }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserDevices(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(3);
    });

    it('should handle 205 reset content', async () => {
      const mockBody = [{ id: 'device1' }];
      const response = createMockResponse(205, mockBody);
      const result = await processor.listUserDevices(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 413 payload too large', async () => {
      const mockBody = { error: 'Request entity too large' };
      const response = createMockResponse(413, mockBody);
      try {
        await processor.listUserDevices(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(413);
      }
    });
  });

  // listUserGroups - comprehensive tests
  describe('listUserGroups', () => {
    it('should handle 200 with groups', async () => {
      const mockBody = [
        { id: 'group1', profile: { name: 'Admins' }, type: 'OKTA_GROUP' },
        { id: 'group2', profile: { name: 'Users' }, type: 'OKTA_GROUP' },
        { id: 'group3', profile: { name: 'Guests' }, type: 'APP_GROUP' }
      ];
      const response = createMockResponse(200, mockBody);
      const result = await processor.listUserGroups(response as any);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(3);
    });

    it('should handle 207 multi-status', async () => {
      const mockBody = [{ id: 'group1' }];
      const response = createMockResponse(207, mockBody);
      const result = await processor.listUserGroups(response as any);
      expect(result).to.be.an('array');
    });

    it('should throw on 414 uri too long', async () => {
      const mockBody = { error: 'Request URI too long' };
      const response = createMockResponse(414, mockBody);
      try {
        await processor.listUserGroups(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(414);
      }
    });
  });

  // reactivateUser - comprehensive tests
  describe('reactivateUser', () => {
    it('should handle 200 with complete user data', async () => {
      const mockBody = {
        id: 'user123',
        status: 'ACTIVE',
        profile: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
        activated: '2026-02-13T10:00:00.000Z'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.reactivateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 202 accepted', async () => {
      const mockBody = { id: 'user123', status: 'PROVISIONED' };
      const response = createMockResponse(202, mockBody);
      const result = await processor.reactivateUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 415 unsupported media type', async () => {
      const mockBody = { error: 'Unsupported media type' };
      const response = createMockResponse(415, mockBody);
      try {
        await processor.reactivateUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(415);
      }
    });
  });

  // replaceUser - comprehensive tests
  describe('replaceUser', () => {
    it('should handle 200 with updated user', async () => {
      const mockBody = {
        id: 'user123',
        status: 'ACTIVE',
        profile: {
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          mobilePhone: '+1234567890'
        },
        lastUpdated: '2026-02-13T10:30:00.000Z'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.replaceUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 201 created', async () => {
      const mockBody = { id: 'user456', status: 'STAGED' };
      const response = createMockResponse(201, mockBody);
      const result = await processor.replaceUser(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 416 range not satisfiable', async () => {
      const mockBody = { error: 'Range not satisfiable' };
      const response = createMockResponse(416, mockBody);
      try {
        await processor.replaceUser(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(416);
      }
    });

    it('should validate user parameter', async () => {
      try {
        await factory.replaceUser('user123', null as any, false, 'etag');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('user');
      }
    });
  });

  // replaceUserClassification - comprehensive tests
  describe('replaceUserClassification', () => {
    it('should handle 200 with classification update', async () => {
      const mockBody = {
        classification: 'HIGH_VALUE',
        updatedAt: '2026-02-13T11:00:00.000Z'
      };
      const response = createMockResponse(200, mockBody);
      const result = await processor.replaceUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should handle 202 processing', async () => {
      const mockBody = { classification: 'MEDIUM_VALUE' };
      const response = createMockResponse(202, mockBody);
      const result = await processor.replaceUserClassification(response as any);
      expect(result).to.be.an('object');
    });

    it('should throw on 417 expectation failed', async () => {
      const mockBody = { error: 'Expectation failed' };
      const response = createMockResponse(417, mockBody);
      try {
        await processor.replaceUserClassification(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(417);
      }
    });

    it('should validate replaceUserClassification parameter', async () => {
      try {
        await factory.replaceUserClassification('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('replaceUserClassification');
      }
    });
  });

  // revokeGrantsForUserAndClient - comprehensive tests
  describe('revokeGrantsForUserAndClient', () => {
    it('should handle 204 success', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeGrantsForUserAndClient(response as any);
    });

    it('should handle 200 as alternative success', async () => {
      const response = createMockResponse(200, {});
      await processor.revokeGrantsForUserAndClient(response as any);
    });

    it('should throw on 418 teapot (edge case)', async () => {
      const mockBody = { error: 'I am a teapot' };
      const response = createMockResponse(418, mockBody);
      try {
        await processor.revokeGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(418);
      }
    });

    it('should throw on 421 misdirected request', async () => {
      const mockBody = { error: 'Misdirected request' };
      const response = createMockResponse(421, mockBody);
      try {
        await processor.revokeGrantsForUserAndClient(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(421);
      }
    });

    it('should validate both userId and clientId', async () => {
      try {
        await factory.revokeGrantsForUserAndClient(null as any, null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.match(/userId|clientId/);
      }
    });
  });

  // revokeUserGrant - comprehensive tests
  describe('revokeUserGrant', () => {
    it('should handle 204 revoked successfully', async () => {
      const response = createMockResponse(204, {});
      await processor.revokeUserGrant(response as any);
    });

    it('should handle 202 accepted for processing', async () => {
      const response = createMockResponse(202, {});
      await processor.revokeUserGrant(response as any);
    });

    it('should throw on 423 locked', async () => {
      const mockBody = { error: 'Resource is locked' };
      const response = createMockResponse(423, mockBody);
      try {
        await processor.revokeUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(423);
      }
    });

    it('should throw on 424 failed dependency', async () => {
      const mockBody = { error: 'Failed dependency' };
      const response = createMockResponse(424, mockBody);
      try {
        await processor.revokeUserGrant(response as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.code).to.equal(424);
      }
    });

    it('should validate grantId is required', async () => {
      try {
        await factory.revokeUserGrant('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('grantId');
      }
    });
  });
});
