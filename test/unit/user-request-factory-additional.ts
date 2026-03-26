import { expect } from 'chai';
import { UserApiRequestFactory } from '../../src/generated/apis/UserApi';

describe('UserApi Request Factory - Additional Coverage', () => {
  let factory: UserApiRequestFactory;

  beforeEach(() => {
    factory = new UserApiRequestFactory();
  });

  describe('endUserSessions', () => {
    it('should not throw error with keepCurrent parameter', async () => {
      try {
        const keepCurrent = { keepCurrent: true };
        await factory.endUserSessions(keepCurrent);
      } catch (error: any) {
        // Configuration error is expected, we're testing parameter validation
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw error with empty keepCurrent', async () => {
      try {
        const keepCurrent = {};
        await factory.endUserSessions(keepCurrent);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw error with null keepCurrent', async () => {
      try {
        await factory.endUserSessions(null);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('forgotPassword', () => {
    it('should not throw RequiredError with sendEmail true', async () => {
      try {
        await factory.forgotPassword('userId123', true);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with sendEmail false', async () => {
      try {
        await factory.forgotPassword('userId123', false);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError without sendEmail', async () => {
      try {
        await factory.forgotPassword('userId123', undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('getIdentityProviderApplicationUser', () => {
    it('should throw RequiredError when idpId is null', async () => {
      try {
        await factory.getIdentityProviderApplicationUser(null as any, 'userId123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when idpId is undefined', async () => {
      try {
        await factory.getIdentityProviderApplicationUser(undefined as any, 'userId123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.getIdentityProviderApplicationUser('idp123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is undefined', async () => {
      try {
        await factory.getIdentityProviderApplicationUser('idp123', undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        await factory.getIdentityProviderApplicationUser('idp123', 'userId456');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('getRefreshTokenForUserAndClient', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient(null as any, 'client123', 'token456');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when clientId is null', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient('user123', null as any, 'token456');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when tokenId is null', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient('user123', 'client456', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with expand parameter', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient('user123', 'client456', 'token789', 'scope');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError without expand parameter', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient('user123', 'client456', 'token789', undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('getUserClassification', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.getUserClassification(null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is undefined', async () => {
      try {
        await factory.getUserClassification(undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid userId', async () => {
      try {
        await factory.getUserClassification('userId123');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('getUserGrant', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.getUserGrant(null as any, 'grant123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when grantId is null', async () => {
      try {
        await factory.getUserGrant('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with expand parameter', async () => {
      try {
        await factory.getUserGrant('user123', 'grant456', 'scope');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError without expand parameter', async () => {
      try {
        await factory.getUserGrant('user123', 'grant456', undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('getUserRisk', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.getUserRisk(null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is undefined', async () => {
      try {
        await factory.getUserRisk(undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid userId', async () => {
      try {
        await factory.getUserRisk('userId123');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('linkUserToIdentityProvider', () => {
    it('should throw RequiredError when idpId is null', async () => {
      try {
        await factory.linkUserToIdentityProvider(null as any, 'user123', {} as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.linkUserToIdentityProvider('idp123', null as any, {} as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userIdentityProviderLinkRequest is null', async () => {
      try {
        await factory.linkUserToIdentityProvider('idp123', 'user456', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        const linkRequest = { externalId: 'ext123' };
        await factory.linkUserToIdentityProvider('idp123', 'user456', linkRequest as any);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listGrantsForUserAndClient', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.listGrantsForUserAndClient(null as any, 'client123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when clientId is null', async () => {
      try {
        await factory.listGrantsForUserAndClient('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with expand parameter', async () => {
      try {
        await factory.listGrantsForUserAndClient('user123', 'client456', 'scope');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError without expand parameter', async () => {
      try {
        await factory.listGrantsForUserAndClient('user123', 'client456', undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listIdentityProviderApplicationUsers', () => {
    it('should throw RequiredError when idpId is null', async () => {
      try {
        await factory.listIdentityProviderApplicationUsers(null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when idpId is undefined', async () => {
      try {
        await factory.listIdentityProviderApplicationUsers(undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid idpId', async () => {
      try {
        await factory.listIdentityProviderApplicationUsers('idp123');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listRefreshTokensForUserAndClient', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient(null as any, 'client123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when clientId is null', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with expand parameter', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient('user123', 'client456', 'scope');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError without expand parameter', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient('user123', 'client456', undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with after parameter', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient('user123', 'client456', undefined, 'afterToken');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listSocialAuthTokens', () => {
    it('should throw RequiredError when idpId is null', async () => {
      try {
        await factory.listSocialAuthTokens(null as any, 'userId123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.listSocialAuthTokens('idp123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        await factory.listSocialAuthTokens('idp123', 'userId456');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listUserBlocks', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.listUserBlocks(null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is undefined', async () => {
      try {
        await factory.listUserBlocks(undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid userId', async () => {
      try {
        await factory.listUserBlocks('userId123');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listUserDevices', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.listUserDevices(null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is undefined', async () => {
      try {
        await factory.listUserDevices(undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid userId', async () => {
      try {
        await factory.listUserDevices('userId123');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('listUserGroups', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.listUserGroups(null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is undefined', async () => {
      try {
        await factory.listUserGroups(undefined as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid userId', async () => {
      try {
        await factory.listUserGroups('userId123');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('reactivateUser', () => {
    it('should not throw RequiredError with sendEmail true', async () => {
      try {
        await factory.reactivateUser('userId123', true);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with sendEmail false', async () => {
      try {
        await factory.reactivateUser('userId123', false);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError without sendEmail', async () => {
      try {
        await factory.reactivateUser('userId123', undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('replaceUser', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.replaceUser(null as any, {} as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when user is null', async () => {
      try {
        await factory.replaceUser('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        const user = { profile: { firstName: 'John', lastName: 'Doe' } };
        await factory.replaceUser('user123', user as any);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('replaceUserClassification', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.replaceUserClassification(null as any, {} as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when replaceUserClassification is null', async () => {
      try {
        await factory.replaceUserClassification('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        const classification = { classification: 'HIGH_VALUE' };
        await factory.replaceUserClassification('user123', classification as any);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('generateResetPasswordToken', () => {
    it('should not throw RequiredError when provider is omitted', async () => {
      try {
        await factory.generateResetPasswordToken('user123', true);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError when provider is FEDERATION', async () => {
      try {
        await factory.generateResetPasswordToken('user123', false, undefined, 'FEDERATION' as any);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError when provider is undefined', async () => {
      try {
        await factory.generateResetPasswordToken('user123', true, false, undefined);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with all parameters set', async () => {
      try {
        await factory.generateResetPasswordToken('user123', false, true, 'FEDERATION' as any);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('revokeGrantsForUserAndClient', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.revokeGrantsForUserAndClient(null as any, 'client123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when clientId is null', async () => {
      try {
        await factory.revokeGrantsForUserAndClient('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        await factory.revokeGrantsForUserAndClient('user123', 'client456');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('revokeUserGrant', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.revokeUserGrant(null as any, 'grant123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when grantId is null', async () => {
      try {
        await factory.revokeUserGrant('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        await factory.revokeUserGrant('user123', 'grant456');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('upsertUserRisk', () => {
    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.upsertUserRisk(null as any, {} as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userRiskRequest is null', async () => {
      try {
        await factory.upsertUserRisk('user123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        const riskRequest = { level: 'HIGH' };
        await factory.upsertUserRisk('user123', riskRequest as any);
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });

  describe('unlinkUserFromIdentityProvider', () => {
    it('should throw RequiredError when idpId is null', async () => {
      try {
        await factory.unlinkUserFromIdentityProvider(null as any, 'user123');
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should throw RequiredError when userId is null', async () => {
      try {
        await factory.unlinkUserFromIdentityProvider('idp123', null as any);
        expect.fail('Should have thrown RequiredError');
      } catch (error: any) {
        expect(error.name).to.equal('RequiredError');
      }
    });

    it('should not throw RequiredError with valid parameters', async () => {
      try {
        await factory.unlinkUserFromIdentityProvider('idp123', 'user456');
      } catch (error: any) {
        expect(error.name).to.not.equal('RequiredError');
      }
    });
  });
});
