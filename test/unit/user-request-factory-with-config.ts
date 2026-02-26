import { expect } from 'chai';
import { UserApiRequestFactory } from '../../src/generated/apis/UserApi';

describe('UserApi Request Factory - With Config', () => {
  let factory: UserApiRequestFactory;
  let mockConfig: any;

  beforeEach(() => {
    factory = new UserApiRequestFactory();
    mockConfig = {
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
            getUrl: () => path,
            getHttpMethod: () => method
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
  });

  describe('endUserSessions - with auth', () => {
    it('should execute with apiToken auth', async () => {
      const keepCurrent = { keepCurrent: true };
      const context = await factory.endUserSessions(keepCurrent, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 auth', async () => {
      mockConfig.authMethods.apiToken = null;
      const keepCurrent = {};
      const context = await factory.endUserSessions(keepCurrent, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods.apiToken = null;
      mockConfig.authMethods.oauth2 = null;
      mockConfig.authMethods = {
        'default': {
          applySecurityAuthentication: async () => {
            // no-op
          }
        }
      };
      const context = await factory.endUserSessions(null, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('forgotPassword - with query params', () => {
    it('should execute with sendEmail=true', async () => {
      const context = await factory.forgotPassword('user123', true, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with sendEmail=false', async () => {
      const context = await factory.forgotPassword('user123', false, mockConfig);
      expect(context).to.exist;
    });

    it('should execute without sendEmail', async () => {
      const context = await factory.forgotPassword('user123', undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('getIdentityProviderApplicationUser - with auth', () => {
    it('should execute with all auth methods', async () => {
      const context = await factory.getIdentityProviderApplicationUser('idp123', 'user456', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with only oauth2', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.getIdentityProviderApplicationUser('idp123', 'user456', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('getRefreshTokenForUserAndClient - with expand', () => {
    it('should execute with expand parameter', async () => {
      const context = await factory.getRefreshTokenForUserAndClient('user123', 'client456', 'token789', 'scope', mockConfig);
      expect(context).to.exist;
    });

    it('should execute without expand parameter', async () => {
      const context = await factory.getRefreshTokenForUserAndClient('user123', 'client456', 'token789', undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('getUserClassification - with auth', () => {
    it('should execute with apiToken', async () => {
      const context = await factory.getUserClassification('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.getUserClassification('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods = {
        'default': { applySecurityAuthentication: async () => {
          // no-op
        } }
      };
      const context = await factory.getUserClassification('user123', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('getUserGrant - with expand', () => {
    it('should execute with expand parameter', async () => {
      const context = await factory.getUserGrant('user123', 'grant456', 'scope', mockConfig);
      expect(context).to.exist;
    });

    it('should execute without expand', async () => {
      const context = await factory.getUserGrant('user123', 'grant456', undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('getUserRisk - with auth', () => {
    it('should execute with all auth methods', async () => {
      const context = await factory.getUserRisk('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.getUserRisk('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods = {
        'default': { applySecurityAuthentication: async () => {
          // no-op
        } }
      };
      const context = await factory.getUserRisk('user123', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('linkUserToIdentityProvider - with body', () => {
    it('should execute with link request body', async () => {
      const linkRequest = { externalId: 'ext123' };
      const context = await factory.linkUserToIdentityProvider('idp123', 'user456', linkRequest as any, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with complex link request', async () => {
      const linkRequest = {
        externalId: 'ext456',
        displayName: 'Test User'
      };
      const context = await factory.linkUserToIdentityProvider('idp789', 'user101', linkRequest as any, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listGrantsForUserAndClient - with expand', () => {
    it('should execute with expand', async () => {
      const context = await factory.listGrantsForUserAndClient('user123', 'client456', 'scope', undefined, undefined, mockConfig);
      expect(context).to.exist;
    });

    it('should execute without expand', async () => {
      const context = await factory.listGrantsForUserAndClient('user123', 'client456', undefined, undefined, undefined, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.listGrantsForUserAndClient('user123', 'client456', 'scope', undefined, undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listIdentityProviderApplicationUsers - with query params', () => {
    it('should execute with all query parameters', async () => {
      const context = await factory.listIdentityProviderApplicationUsers('idp123', 'query', 'after', 10, 'expand', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with minimal parameters', async () => {
      const context = await factory.listIdentityProviderApplicationUsers('idp123', undefined, undefined, undefined, undefined, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with partial parameters', async () => {
      const context = await factory.listIdentityProviderApplicationUsers('idp123', 'q=test', undefined, 5, undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listRefreshTokensForUserAndClient - with pagination', () => {
    it('should execute with expand and after', async () => {
      const context = await factory.listRefreshTokensForUserAndClient('user123', 'client456', 'scope', 'afterToken', 20, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with only after', async () => {
      const context = await factory.listRefreshTokensForUserAndClient('user123', 'client456', undefined, 'afterToken', undefined, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with only limit', async () => {
      const context = await factory.listRefreshTokensForUserAndClient('user123', 'client456', undefined, undefined, 50, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listSocialAuthTokens - with auth', () => {
    it('should execute with all auth methods', async () => {
      const context = await factory.listSocialAuthTokens('idp123', 'user456', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.listSocialAuthTokens('idp123', 'user456', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listUserBlocks - with auth', () => {
    it('should execute with apiToken', async () => {
      const context = await factory.listUserBlocks('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods = {
        'default': { applySecurityAuthentication: async () => {
          // no-op
        } }
      };
      const context = await factory.listUserBlocks('user123', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listUserDevices - with auth', () => {
    it('should execute with all auth methods', async () => {
      const context = await factory.listUserDevices('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.listUserDevices('user123', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('listUserGroups - with auth', () => {
    it('should execute with apiToken', async () => {
      const context = await factory.listUserGroups('user123', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods = {
        'default': { applySecurityAuthentication: async () => {
          // no-op
        } }
      };
      const context = await factory.listUserGroups('user123', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('reactivateUser - with sendEmail', () => {
    it('should execute with sendEmail=true', async () => {
      const context = await factory.reactivateUser('user123', true, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with sendEmail=false', async () => {
      const context = await factory.reactivateUser('user123', false, mockConfig);
      expect(context).to.exist;
    });

    it('should execute without sendEmail', async () => {
      const context = await factory.reactivateUser('user123', undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('replaceUser - with body', () => {
    it('should execute with user object', async () => {
      const user = {
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com'
        }
      };
      const context = await factory.replaceUser('user123', user as any, undefined, undefined, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with minimal user object', async () => {
      const user = { profile: {} };
      const context = await factory.replaceUser('user123', user as any, undefined, undefined, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('replaceUserClassification - with body', () => {
    it('should execute with HIGH_VALUE classification', async () => {
      const classification = { classification: 'HIGH_VALUE' };
      const context = await factory.replaceUserClassification('user123', classification as any, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with LOW_VALUE classification', async () => {
      const classification = { classification: 'LOW_VALUE' };
      const context = await factory.replaceUserClassification('user123', classification as any, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('revokeGrantsForUserAndClient - with auth', () => {
    it('should execute with all auth methods', async () => {
      const context = await factory.revokeGrantsForUserAndClient('user123', 'client456', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.revokeGrantsForUserAndClient('user123', 'client456', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('revokeUserGrant - with auth', () => {
    it('should execute with apiToken', async () => {
      const context = await factory.revokeUserGrant('user123', 'grant456', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods = {
        'default': { applySecurityAuthentication: async () => {
          // no-op
        } }
      };
      const context = await factory.revokeUserGrant('user123', 'grant456', mockConfig);
      expect(context).to.exist;
    });
  });

  describe('upsertUserRisk - with body', () => {
    it('should execute with HIGH risk level', async () => {
      const riskRequest = { level: 'HIGH' };
      const context = await factory.upsertUserRisk('user123', riskRequest as any, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with MEDIUM risk level', async () => {
      const riskRequest = { level: 'MEDIUM' };
      const context = await factory.upsertUserRisk('user123', riskRequest as any, mockConfig);
      expect(context).to.exist;
    });

    it('should execute with LOW risk level', async () => {
      const riskRequest = { level: 'LOW' };
      const context = await factory.upsertUserRisk('user456', riskRequest as any, mockConfig);
      expect(context).to.exist;
    });
  });

  describe('unlinkUserFromIdentityProvider - with auth', () => {
    it('should execute with all auth methods', async () => {
      const context = await factory.unlinkUserFromIdentityProvider('idp123', 'user456', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with oauth2 only', async () => {
      mockConfig.authMethods.apiToken = null;
      const context = await factory.unlinkUserFromIdentityProvider('idp123', 'user456', mockConfig);
      expect(context).to.exist;
    });

    it('should execute with default auth', async () => {
      mockConfig.authMethods = {
        'default': { applySecurityAuthentication: async () => {
          // no-op
        } }
      };
      const context = await factory.unlinkUserFromIdentityProvider('idp789', 'user101', mockConfig);
      expect(context).to.exist;
    });
  });
});
