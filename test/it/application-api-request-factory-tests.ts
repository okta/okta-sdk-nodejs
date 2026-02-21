import { expect } from 'chai';
import { ApplicationApiRequestFactory } from '../../src/generated/apis/ApplicationApi';

// Helper function to create mock configuration
function createMockConfiguration() {
  return {
    baseServer: {
      makeRequestContext: (path: string, method: string, vars?: any) => {
        return {
          setHeaderParam: () => {},
          setQueryParam: () => {},
          setBody: () => {},
          getUrl: () => path
        };
      }
    },
    authMethods: {
      apiToken: {
        applySecurityAuthentication: async () => {}
      },
      oauth2: {
        applySecurityAuthentication: async () => {}
      }
    }
  };
}

describe('ApplicationApi Request Factory Tests', () => {
  let requestFactory: ApplicationApiRequestFactory;

  beforeEach(() => {
    const config: any = createMockConfiguration();
    requestFactory = new ApplicationApiRequestFactory(config);
  });

  describe('activateDefaultProvisioningConnectionForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.activateDefaultProvisioningConnectionForApplication(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.activateDefaultProvisioningConnectionForApplication(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.activateDefaultProvisioningConnectionForApplication('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('assignApplicationPolicy', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.assignApplicationPolicy(null as any, 'policy123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.assignApplicationPolicy(undefined as any, 'policy123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when policyId is null', async () => {
      try {
        await requestFactory.assignApplicationPolicy('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when policyId is undefined', async () => {
      try {
        await requestFactory.assignApplicationPolicy('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.assignApplicationPolicy('app123', 'policy123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('cloneApplicationKey', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.cloneApplicationKey(null as any, 'key123', 'targetApp', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.cloneApplicationKey(undefined as any, 'key123', 'targetApp', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when keyId is null', async () => {
      try {
        await requestFactory.cloneApplicationKey('app123', null as any, 'targetApp', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when keyId is undefined', async () => {
      try {
        await requestFactory.cloneApplicationKey('app123', undefined as any, 'targetApp', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when targetAid is null', async () => {
      try {
        await requestFactory.cloneApplicationKey('app123', 'key123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when targetAid is undefined', async () => {
      try {
        await requestFactory.cloneApplicationKey('app123', 'key123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with targetAid query param', async () => {
      const requestContext = await requestFactory.cloneApplicationKey('app123', 'key123', 'targetApp', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('configureCapabilityApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.configureCapabilityApplication(null as any, 'SSO' as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.configureCapabilityApplication(undefined as any, 'SSO' as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when capabilityType is null', async () => {
      try {
        await requestFactory.configureCapabilityApplication('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when capabilityType is undefined', async () => {
      try {
        await requestFactory.configureCapabilityApplication('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.configureCapabilityApplication('app123', 'SSO' as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('createFederatedClaim', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.createFederatedClaim(null as any, { name: 'claim1' } as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.createFederatedClaim(undefined as any, { name: 'claim1' } as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when federatedClaimRequestBody is null', async () => {
      try {
        await requestFactory.createFederatedClaim('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when federatedClaimRequestBody is undefined', async () => {
      try {
        await requestFactory.createFederatedClaim('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.createFederatedClaim('app123', { name: 'claim1' } as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('deactivateDefaultProvisioningConnectionForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.deactivateDefaultProvisioningConnectionForApplication(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.deactivateDefaultProvisioningConnectionForApplication(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.deactivateDefaultProvisioningConnectionForApplication('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('deleteFederatedClaim', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.deleteFederatedClaim(null as any, 'claim123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.deleteFederatedClaim(undefined as any, 'claim123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when claimId is null', async () => {
      try {
        await requestFactory.deleteFederatedClaim('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when claimId is undefined', async () => {
      try {
        await requestFactory.deleteFederatedClaim('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.deleteFederatedClaim('app123', 'claim123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('generateCsrForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.generateCsrForApplication(null as any, { subject: {} } as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.generateCsrForApplication(undefined as any, { subject: {} } as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when metadata is null', async () => {
      try {
        await requestFactory.generateCsrForApplication('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when metadata is undefined', async () => {
      try {
        await requestFactory.generateCsrForApplication('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.generateCsrForApplication('app123', { subject: {} } as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getApplicationKey', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getApplicationKey(null as any, 'key123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getApplicationKey(undefined as any, 'key123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when keyId is null', async () => {
      try {
        await requestFactory.getApplicationKey('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when keyId is undefined', async () => {
      try {
        await requestFactory.getApplicationKey('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.getApplicationKey('app123', 'key123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getApplicationUser', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getApplicationUser(null as any, 'user123', undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getApplicationUser(undefined as any, 'user123', undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when userId is null', async () => {
      try {
        await requestFactory.getApplicationUser('app123', null as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when userId is undefined', async () => {
      try {
        await requestFactory.getApplicationUser('app123', undefined as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with expand query param', async () => {
      const requestContext = await requestFactory.getApplicationUser('app123', 'user123', 'user', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getCsrForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getCsrForApplication(null as any, 'csr123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getCsrForApplication(undefined as any, 'csr123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when csrId is null', async () => {
      try {
        await requestFactory.getCsrForApplication('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when csrId is undefined', async () => {
      try {
        await requestFactory.getCsrForApplication('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.getCsrForApplication('app123', 'csr123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getDefaultProvisioningConnectionForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getDefaultProvisioningConnectionForApplication(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getDefaultProvisioningConnectionForApplication(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.getDefaultProvisioningConnectionForApplication('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getFeatureForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getFeatureForApplication(null as any, 'feature1', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getFeatureForApplication(undefined as any, 'feature1', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when name is null', async () => {
      try {
        await requestFactory.getFeatureForApplication('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when name is undefined', async () => {
      try {
        await requestFactory.getFeatureForApplication('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.getFeatureForApplication('app123', 'feature1', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getFederatedClaim', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getFederatedClaim(null as any, 'claim123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getFederatedClaim(undefined as any, 'claim123', undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when claimId is null', async () => {
      try {
        await requestFactory.getFederatedClaim('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when claimId is undefined', async () => {
      try {
        await requestFactory.getFederatedClaim('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.getFederatedClaim('app123', 'claim123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getOAuth2AccessTokenForExpressConfiguration', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getOAuth2AccessTokenForExpressConfiguration(null as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getOAuth2AccessTokenForExpressConfiguration(undefined as any, undefined, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with token query param', async () => {
      const requestContext = await requestFactory.getOAuth2AccessTokenForExpressConfiguration('app123', 'token123', undefined, undefined);
      expect(requestContext).to.exist;
    });

    it('should create request context with capabilityType query param', async () => {
      const requestContext = await requestFactory.getOAuth2AccessTokenForExpressConfiguration('app123', undefined, 'SSO' as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getOAuth2TokenForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getOAuth2TokenForApplication(null as any, 'token123', undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getOAuth2TokenForApplication(undefined as any, 'token123', undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when tokenId is null', async () => {
      try {
        await requestFactory.getOAuth2TokenForApplication('app123', null as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when tokenId is undefined', async () => {
      try {
        await requestFactory.getOAuth2TokenForApplication('app123', undefined as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with expand query param', async () => {
      const requestContext = await requestFactory.getOAuth2TokenForApplication('app123', 'token123', 'scope', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getScopeConsentGrant', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getScopeConsentGrant(null as any, 'grant123', undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getScopeConsentGrant(undefined as any, 'grant123', undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when grantId is null', async () => {
      try {
        await requestFactory.getScopeConsentGrant('app123', null as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when grantId is undefined', async () => {
      try {
        await requestFactory.getScopeConsentGrant('app123', undefined as any, undefined, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with expand query param', async () => {
      const requestContext = await requestFactory.getScopeConsentGrant('app123', 'grant123', 'scope', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('getUserProvisioningConnectionJWKS', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.getUserProvisioningConnectionJWKS(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.getUserProvisioningConnectionJWKS(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.getUserProvisioningConnectionJWKS('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('grantConsentToScope', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.grantConsentToScope(null as any, { scopeId: 'scope1' } as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.grantConsentToScope(undefined as any, { scopeId: 'scope1' } as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when oAuth2ScopeConsentGrant is null', async () => {
      try {
        await requestFactory.grantConsentToScope('app123', null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when oAuth2ScopeConsentGrant is undefined', async () => {
      try {
        await requestFactory.grantConsentToScope('app123', undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with body', async () => {
      const requestContext = await requestFactory.grantConsentToScope('app123', { scopeId: 'scope1' } as any, undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('listCsrsForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.listCsrsForApplication(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.listCsrsForApplication(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.listCsrsForApplication('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('listFeaturesForApplication', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.listFeaturesForApplication(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.listFeaturesForApplication(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.listFeaturesForApplication('app123', undefined);
      expect(requestContext).to.exist;
    });
  });

  describe('listFederatedClaims', () => {
    it('should throw error when appId is null', async () => {
      try {
        await requestFactory.listFederatedClaims(null as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw error when appId is undefined', async () => {
      try {
        await requestFactory.listFederatedClaims(undefined as any, undefined);
        expect.fail('Should have thrown error');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should create request context with correct path and method', async () => {
      const requestContext = await requestFactory.listFederatedClaims('app123', undefined);
      expect(requestContext).to.exist;
    });
  });
});
