import { expect } from 'chai';
import { UserApiRequestFactory } from '../../src/generated/apis/UserApi';

describe('UserApiRequestFactory', () => {
  let factory: UserApiRequestFactory;

  beforeEach(() => {
    factory = new UserApiRequestFactory();
  });

  describe('activateUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.activateUser(null as any, true);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('changePassword', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.changePassword(null as any, {} as any, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when changePasswordRequest is null', async () => {
      try {
        await factory.changePassword('user123', null as any, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('changePasswordRequest');
      }
    });
  });

  describe('changeRecoveryQuestion', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.changeRecoveryQuestion(null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when userCredentials is null', async () => {
      try {
        await factory.changeRecoveryQuestion('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userCredentials');
      }
    });
  });

  describe('createUser', () => {
    it('should throw error when body is null', async () => {
      try {
        await factory.createUser(null as any, true, false, 'changePassword');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('body');
      }
    });
  });

  describe('deactivateUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.deactivateUser(null as any, false, 'minimal');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('deleteLinkedObjectForUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.deleteLinkedObjectForUser(null as any, 'relationship');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when relationshipName is null', async () => {
      try {
        await factory.deleteLinkedObjectForUser('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('relationshipName');
      }
    });
  });

  describe('deleteUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.deleteUser(null as any, false, 'minimal');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('expirePassword', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.expirePassword(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('expirePasswordAndGetTemporaryPassword', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.expirePasswordAndGetTemporaryPassword(null as any, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('forgotPassword', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.forgotPassword(null as any, true);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('forgotPasswordSetNewPassword', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.forgotPasswordSetNewPassword(null as any, {} as any, true);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when userCredentials is null', async () => {
      try {
        await factory.forgotPasswordSetNewPassword('user123', null as any, true);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userCredentials');
      }
    });
  });

  describe('generateResetPasswordToken', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.generateResetPasswordToken(null as any, true, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('getIdentityProviderApplicationUser', () => {
    it('should throw error when idpId is null', async () => {
      try {
        await factory.getIdentityProviderApplicationUser(null as any, 'user123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('idpId');
      }
    });

    it('should throw error when userId is null', async () => {
      try {
        await factory.getIdentityProviderApplicationUser('idp123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('getRefreshTokenForUserAndClient', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient(null as any, 'client123', 'token123', 'scope');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when clientId is null', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient('user123', null as any, 'token123', 'scope');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });

    it('should throw error when tokenId is null', async () => {
      try {
        await factory.getRefreshTokenForUserAndClient('user123', 'client123', null as any, 'scope');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('tokenId');
      }
    });
  });

  describe('getUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.getUser(null as any, 'application/json', 'groups');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('getUserClassification', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.getUserClassification(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('getUserGrant', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.getUserGrant(null as any, 'grant123', 'scope');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when grantId is null', async () => {
      try {
        await factory.getUserGrant('user123', null as any, 'scope');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('grantId');
      }
    });
  });

  describe('getUserRisk', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.getUserRisk(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('linkUserToIdentityProvider', () => {
    it('should throw error when idpId is null', async () => {
      try {
        await factory.linkUserToIdentityProvider(null as any, 'user123', {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('idpId');
      }
    });

    it('should throw error when userId is null', async () => {
      try {
        await factory.linkUserToIdentityProvider('idp123', null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when userIdentityProviderLinkRequest is null', async () => {
      try {
        await factory.linkUserToIdentityProvider('idp123', 'user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userIdentityProviderLinkRequest');
      }
    });
  });

  describe('listAppLinks', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listAppLinks(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listGrantsForUserAndClient', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listGrantsForUserAndClient(null as any, 'client123', 'scope', 'after', 20);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when clientId is null', async () => {
      try {
        await factory.listGrantsForUserAndClient('user123', null as any, 'scope', 'after', 20);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });
  });

  describe('listIdentityProviderApplicationUsers', () => {
    it('should throw error when idpId is null', async () => {
      try {
        await factory.listIdentityProviderApplicationUsers(null as any, 'query', 'after', 20, 'expand');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('idpId');
      }
    });
  });

  describe('listLinkedObjectsForUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listLinkedObjectsForUser(null as any, 'relationship');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when relationshipName is null', async () => {
      try {
        await factory.listLinkedObjectsForUser('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('relationshipName');
      }
    });
  });

  describe('listRefreshTokensForUserAndClient', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient(null as any, 'client123', 'scope', 'after', 20);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when clientId is null', async () => {
      try {
        await factory.listRefreshTokensForUserAndClient('user123', null as any, 'scope', 'after', 20);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });
  });

  describe('listSocialAuthTokens', () => {
    it('should throw error when idpId is null', async () => {
      try {
        await factory.listSocialAuthTokens(null as any, 'user123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('idpId');
      }
    });

    it('should throw error when userId is null', async () => {
      try {
        await factory.listSocialAuthTokens('idp123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listUserBlocks', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listUserBlocks(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listUserClients', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listUserClients(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listUserDevices', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listUserDevices(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listUserGrants', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listUserGrants(null as any, 'scope123', 'expand', 'after', 20);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listUserGroups', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listUserGroups(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('listUserIdentityProviders', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.listUserIdentityProviders(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('reactivateUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.reactivateUser(null as any, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('replaceUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.replaceUser(null as any, {} as any, false, 'etag');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when user is null', async () => {
      try {
        await factory.replaceUser('user123', null as any, false, 'etag');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('user');
      }
    });
  });

  describe('replaceUserClassification', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.replaceUserClassification(null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when replaceUserClassification is null', async () => {
      try {
        await factory.replaceUserClassification('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('replaceUserClassification');
      }
    });
  });

  describe('resetFactors', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.resetFactors(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('revokeGrantsForUserAndClient', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.revokeGrantsForUserAndClient(null as any, 'client123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when clientId is null', async () => {
      try {
        await factory.revokeGrantsForUserAndClient('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });
  });

  describe('revokeTokenForUserAndClient', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.revokeTokenForUserAndClient(null as any, 'client123', 'token123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when clientId is null', async () => {
      try {
        await factory.revokeTokenForUserAndClient('user123', null as any, 'token123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });

    it('should throw error when tokenId is null', async () => {
      try {
        await factory.revokeTokenForUserAndClient('user123', 'client123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('tokenId');
      }
    });
  });

  describe('revokeTokensForUserAndClient', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.revokeTokensForUserAndClient(null as any, 'client123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when clientId is null', async () => {
      try {
        await factory.revokeTokensForUserAndClient('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('clientId');
      }
    });
  });

  describe('revokeUserGrant', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.revokeUserGrant(null as any, 'grant123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when grantId is null', async () => {
      try {
        await factory.revokeUserGrant('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('grantId');
      }
    });
  });

  describe('revokeUserGrants', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.revokeUserGrants(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('revokeUserSessions', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.revokeUserSessions(null as any, false, false);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('setLinkedObjectForUser', () => {
    it('should throw error when associatedUserId is null', async () => {
      try {
        await factory.setLinkedObjectForUser(null as any, 'relationship', 'user123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('associatedUserId');
      }
    });

    it('should throw error when primaryRelationshipName is null', async () => {
      try {
        await factory.setLinkedObjectForUser('user456', null as any, 'user123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('primaryRelationshipName');
      }
    });

    it('should throw error when primaryUserId is null', async () => {
      try {
        await factory.setLinkedObjectForUser('user456', 'relationship', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('primaryUserId');
      }
    });
  });

  describe('suspendUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.suspendUser(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('unlinkUserFromIdentityProvider', () => {
    it('should throw error when idpId is null', async () => {
      try {
        await factory.unlinkUserFromIdentityProvider(null as any, 'user123');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('idpId');
      }
    });

    it('should throw error when userId is null', async () => {
      try {
        await factory.unlinkUserFromIdentityProvider('idp123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('unlockUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.unlockUser(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('unsuspendUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.unsuspendUser(null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });
  });

  describe('updateUser', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.updateUser(null as any, {} as any, false, 'etag');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when user is null', async () => {
      try {
        await factory.updateUser('user123', null as any, false, 'etag');
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('user');
      }
    });
  });

  describe('upsertUserRisk', () => {
    it('should throw error when userId is null', async () => {
      try {
        await factory.upsertUserRisk(null as any, {} as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userId');
      }
    });

    it('should throw error when userRiskRequest is null', async () => {
      try {
        await factory.upsertUserRisk('user123', null as any);
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.message).to.include('userRiskRequest');
      }
    });
  });
});
