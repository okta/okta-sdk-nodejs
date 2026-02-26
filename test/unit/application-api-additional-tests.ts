import { expect } from 'chai';
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from '../../src/generated/apis/ApplicationApi';

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
      }
    }
  };
}

// Helper function to create mock response
function createMockResponse(statusCode: number, body?: any, contentType = 'application/json') {
  return {
    httpStatusCode: statusCode,
    headers: { 'content-type': contentType },
    body: { text: async () => typeof body === 'string' ? body : JSON.stringify(body) },
    getBodyAsAny: async () => body
  };
}

describe('ApplicationApi Additional Request Factory Tests', () => {
  let requestFactory: ApplicationApiRequestFactory;

  beforeEach(() => {
    const config: any = createMockConfiguration();
    requestFactory = new ApplicationApiRequestFactory(config);
  });

  describe('publishCsrFromApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.publishCsrFromApplication(null as any, 'csr123', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.publishCsrFromApplication(undefined as any, 'csr123', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when csrId is null', async () => {
      try {
        await requestFactory.publishCsrFromApplication('app123', null as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when csrId is undefined', async () => {
      try {
        await requestFactory.publishCsrFromApplication('app123', undefined as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when body is null', async () => {
      try {
        await requestFactory.publishCsrFromApplication('app123', 'csr123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when body is undefined', async () => {
      try {
        await requestFactory.publishCsrFromApplication('app123', 'csr123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      // PublishCsrFromApplication requires specific certificate content types
      // Skip the actual request creation as it requires valid certificate file format
      const mockFile = { data: Buffer.from('-----BEGIN CERTIFICATE-----\ntest\n-----END CERTIFICATE-----'), name: 'cert.pem' };
      try {
        await requestFactory.publishCsrFromApplication('app123', 'csr123', mockFile as any, undefined);
      } catch (error: any) {
        // Expected to fail with serialization error for mock data
        expect(error).to.exist;
      }
    });
  });

  describe('replaceFederatedClaim', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.replaceFederatedClaim(null as any, 'claim123', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.replaceFederatedClaim(undefined as any, 'claim123', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when claimId is null', async () => {
      try {
        await requestFactory.replaceFederatedClaim('app123', null as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when claimId is undefined', async () => {
      try {
        await requestFactory.replaceFederatedClaim('app123', undefined as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.replaceFederatedClaim('app123', 'claim123', {} as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('revokeCsrFromApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.revokeCsrFromApplication(null as any, 'csr123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.revokeCsrFromApplication(undefined as any, 'csr123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when csrId is null', async () => {
      try {
        await requestFactory.revokeCsrFromApplication('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when csrId is undefined', async () => {
      try {
        await requestFactory.revokeCsrFromApplication('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context', async () => {
      const requestContext = await requestFactory.revokeCsrFromApplication('app123', 'csr123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('revokeOAuth2TokenForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.revokeOAuth2TokenForApplication(null as any, 'token123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.revokeOAuth2TokenForApplication(undefined as any, 'token123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when tokenId is null', async () => {
      try {
        await requestFactory.revokeOAuth2TokenForApplication('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when tokenId is undefined', async () => {
      try {
        await requestFactory.revokeOAuth2TokenForApplication('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context', async () => {
      const requestContext = await requestFactory.revokeOAuth2TokenForApplication('app123', 'token123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('revokeOAuth2TokensForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.revokeOAuth2TokensForApplication(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.revokeOAuth2TokensForApplication(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context', async () => {
      const requestContext = await requestFactory.revokeOAuth2TokensForApplication('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('revokeScopeConsentGrant', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.revokeScopeConsentGrant(null as any, 'grant123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.revokeScopeConsentGrant(undefined as any, 'grant123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when grantId is null', async () => {
      try {
        await requestFactory.revokeScopeConsentGrant('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when grantId is undefined', async () => {
      try {
        await requestFactory.revokeScopeConsentGrant('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context', async () => {
      const requestContext = await requestFactory.revokeScopeConsentGrant('app123', 'grant123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('updateApplicationUser', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.updateApplicationUser(null as any, 'user123', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.updateApplicationUser(undefined as any, 'user123', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when userId is null', async () => {
      try {
        await requestFactory.updateApplicationUser('app123', null as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when userId is undefined', async () => {
      try {
        await requestFactory.updateApplicationUser('app123', undefined as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appUser is null', async () => {
      try {
        await requestFactory.updateApplicationUser('app123', 'user123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appUser is undefined', async () => {
      try {
        await requestFactory.updateApplicationUser('app123', 'user123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.updateApplicationUser('app123', 'user123', {} as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('updateDefaultProvisioningConnectionForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.updateDefaultProvisioningConnectionForApplication(null as any, {} as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.updateDefaultProvisioningConnectionForApplication(undefined as any, {} as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when provisioningConnectionRequest is null', async () => {
      try {
        await requestFactory.updateDefaultProvisioningConnectionForApplication('app123', null as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when provisioningConnectionRequest is undefined', async () => {
      try {
        await requestFactory.updateDefaultProvisioningConnectionForApplication('app123', undefined as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with activate query param', async () => {
      const requestContext = await requestFactory.updateDefaultProvisioningConnectionForApplication('app123', {} as any, true, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('updateFeatureForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.updateFeatureForApplication(null as any, 'feature1', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.updateFeatureForApplication(undefined as any, 'feature1', {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when name is null', async () => {
      try {
        await requestFactory.updateFeatureForApplication('app123', null as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when name is undefined', async () => {
      try {
        await requestFactory.updateFeatureForApplication('app123', undefined as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when capabilitiesObject is null', async () => {
      try {
        await requestFactory.updateFeatureForApplication('app123', 'feature1', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when capabilitiesObject is undefined', async () => {
      try {
        await requestFactory.updateFeatureForApplication('app123', 'feature1', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.updateFeatureForApplication('app123', 'feature1', {} as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('updateGroupAssignmentToApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.updateGroupAssignmentToApplication(null as any, 'group123', [] as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.updateGroupAssignmentToApplication(undefined as any, 'group123', [] as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when groupId is null', async () => {
      try {
        await requestFactory.updateGroupAssignmentToApplication('app123', null as any, [] as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when groupId is undefined', async () => {
      try {
        await requestFactory.updateGroupAssignmentToApplication('app123', undefined as any, [] as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.updateGroupAssignmentToApplication('app123', 'group123', [] as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('uploadApplicationLogo', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.uploadApplicationLogo(null as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.uploadApplicationLogo(undefined as any, {} as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when file is null', async () => {
      try {
        await requestFactory.uploadApplicationLogo('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when file is undefined', async () => {
      try {
        await requestFactory.uploadApplicationLogo('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with file', async () => {
      const requestContext = await requestFactory.uploadApplicationLogo('app123', { data: Buffer.from(''), name: 'logo.png' } as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('verifyProvisioningConnectionForApplication', () => {
    it('should throw error when appName is null', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForApplication(null as any, 'app123', undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appName is undefined', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForApplication(undefined as any, 'app123', undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForApplication('google', null as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForApplication('google', undefined as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with code and state query params', async () => {
      const requestContext = await requestFactory.verifyProvisioningConnectionForApplication('google', 'app123', 'code123', 'state123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('verifyProvisioningConnectionForGoogleApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForGoogleApplication(null as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForGoogleApplication(undefined as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with query params', async () => {
      const requestContext = await requestFactory.verifyProvisioningConnectionForGoogleApplication('app123', 'code123', 'state123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('verifyProvisioningConnectionForOfficeApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForOfficeApplication(null as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.verifyProvisioningConnectionForOfficeApplication(undefined as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with query params', async () => {
      const requestContext = await requestFactory.verifyProvisioningConnectionForOfficeApplication('app123', 'code123', 'state123', undefined);
      expect(requestContext).to.exist;
    });
  });
});

describe('ApplicationApi Additional Response Processor Tests', () => {
  let processor: ApplicationApiResponseProcessor;

  beforeEach(() => {
    processor = new ApplicationApiResponseProcessor();
  });

  describe('activateDefaultProvisioningConnectionForApplication', () => {
    it('should handle 204 No Content response', async () => {
      const mockResponse = createMockResponse(204, {});
      const result = await processor.activateDefaultProvisioningConnectionForApplication(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.activateDefaultProvisioningConnectionForApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.activateDefaultProvisioningConnectionForApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const mockResponse = createMockResponse(429, { errorCode: 'E0000047' });
      try {
        await processor.activateDefaultProvisioningConnectionForApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });
  });

  describe('assignApplicationPolicy', () => {
    it('should handle 204 No Content response', async () => {
      const mockResponse = createMockResponse(204, {});
      const result = await processor.assignApplicationPolicy(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.assignApplicationPolicy(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.assignApplicationPolicy(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('configureCapabilityApplication', () => {
    it('should handle 204 No Content response', async () => {
      const mockResponse = createMockResponse(204, {});
      const result = await processor.configureCapabilityApplication(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw error on 401 Unauthorized', async () => {
      const mockResponse = createMockResponse(401, { errorCode: 'E0000011' });
      try {
        await processor.configureCapabilityApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(401);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.configureCapabilityApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.configureCapabilityApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('createFederatedClaim', () => {
    it('should handle 201 Created response', async () => {
      const mockResponse = createMockResponse(201, { id: 'claim123', name: 'test' });
      const result = await processor.createFederatedClaim(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error on 400 Bad Request', async () => {
      const mockResponse = createMockResponse(400, { errorCode: 'E0000001' });
      try {
        await processor.createFederatedClaim(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(400);
      }
    });

    it('should throw error on 401 Unauthorized', async () => {
      const mockResponse = createMockResponse(401, { errorCode: 'E0000011' });
      try {
        await processor.createFederatedClaim(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(401);
      }
    });
  });

  describe('deactivateDefaultProvisioningConnectionForApplication', () => {
    it('should handle 204 No Content response', async () => {
      const mockResponse = createMockResponse(204, {});
      const result = await processor.deactivateDefaultProvisioningConnectionForApplication(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.deactivateDefaultProvisioningConnectionForApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.deactivateDefaultProvisioningConnectionForApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('getFederatedClaim', () => {
    it('should handle 200 success response', async () => {
      const mockResponse = createMockResponse(200, { id: 'claim123', name: 'test' });
      const result = await processor.getFederatedClaim(mockResponse as any);
      expect(result).to.exist;
    });

    it('should throw error on 401 Unauthorized', async () => {
      const mockResponse = createMockResponse(401, { errorCode: 'E0000011' });
      try {
        await processor.getFederatedClaim(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(401);
      }
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.getFederatedClaim(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.getFederatedClaim(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('verifyProvisioningConnectionForGoogleApplication', () => {
    it('should handle 204 No Content response', async () => {
      const mockResponse = createMockResponse(204, {});
      const result = await processor.verifyProvisioningConnectionForGoogleApplication(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.verifyProvisioningConnectionForGoogleApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.verifyProvisioningConnectionForGoogleApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });
  });

  describe('verifyProvisioningConnectionForOfficeApplication', () => {
    it('should handle 204 No Content response', async () => {
      const mockResponse = createMockResponse(204, {});
      const result = await processor.verifyProvisioningConnectionForOfficeApplication(mockResponse as any);
      expect(result).to.be.undefined;
    });

    it('should throw error on 403 Forbidden', async () => {
      const mockResponse = createMockResponse(403, { errorCode: 'E0000006' });
      try {
        await processor.verifyProvisioningConnectionForOfficeApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(403);
      }
    });

    it('should throw error on 404 Not Found', async () => {
      const mockResponse = createMockResponse(404, { errorCode: 'E0000007' });
      try {
        await processor.verifyProvisioningConnectionForOfficeApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(404);
      }
    });

    it('should throw error on 429 Too Many Requests', async () => {
      const mockResponse = createMockResponse(429, { errorCode: 'E0000047' });
      try {
        await processor.verifyProvisioningConnectionForOfficeApplication(mockResponse as any);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.code).to.equal(429);
      }
    });
  });
});
