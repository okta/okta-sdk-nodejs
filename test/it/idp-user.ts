import { expect } from 'chai';
import {
  Collection,
  DefaultRequestExecutor,
  IdentityProvider,
  IdentityProviderApplicationUser,
  User,
  Client
} from '@okta/okta-sdk-nodejs';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import getMockUser = require('./mocks/user-without-credentials');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-user`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Idp User API', () => {
  let idp: IdentityProvider;
  let user: User;
  before(async () => {
    idp = await client.identityProviderApi.createIdentityProvider({
      identityProvider: getMockGenericOidcIdp()
    });
    user = await client.userApi.createUser({
      body: getMockUser(),
      activate: false
    });
  });

  after(async () => {
    await client.identityProviderApi.deleteIdentityProvider({idpId: idp.id});
    await utils.cleanupUser(client, user);
  });

  describe('List Linked IdP Users', () => {
    beforeEach(async () => {
      await client.identityProviderApi.linkUserToIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
        userIdentityProviderLinkRequest: { externalId: 'externalId' }
      });
    });

    afterEach(async () => {
      await client.identityProviderApi.unlinkUserFromIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
      });
    });

    it('should return a Collection', async () => {
      const users = await client.identityProviderApi.listIdentityProviderApplicationUsers({
        idpId: idp.id
      });
      expect(users).to.be.instanceOf(Collection);
    });

    it('should resolve IdentityProviderApplicationUser in collection', async () => {
      const list = await client.identityProviderApi.listIdentityProviderApplicationUsers({
        idpId: idp.id
      });
      await list.each(user => {
        expect(user).to.be.instanceOf(IdentityProviderApplicationUser);
      });
    });
  });

  describe('Get linked user for Idp', () => {
    beforeEach(async () => {
      await client.identityProviderApi.linkUserToIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
        userIdentityProviderLinkRequest: { externalId: 'externalId' }
      });
    });

    afterEach(async () => {
      await client.identityProviderApi.unlinkUserFromIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
      });
    });

    it('should return linked user as instanceof IdentityProviderApplicationUser', async () => {
      const idpUser = await client.identityProviderApi.getIdentityProviderApplicationUser({
        idpId: idp.id, 
        userId: user.id
      });
      expect(idpUser).to.be.instanceOf(IdentityProviderApplicationUser);
    });

    it('should link to idp', async () => {
      const idpUser = await client.identityProviderApi.getIdentityProviderApplicationUser({
        idpId: idp.id, 
        userId: user.id
      });
      expect(idpUser._links.idp.href).to.contains(idp.id);
    });
  });

  describe('Link user', () => {
    afterEach(async () => {
      await client.identityProviderApi.unlinkUserFromIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
      });
    });

    it('should link user to idp', async () => {
      const linkedUser = await client.identityProviderApi.linkUserToIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
        userIdentityProviderLinkRequest: { externalId: 'externalId' }
      });
      expect(linkedUser._links.idp.href).to.contains(idp.id);
    });
  });

  describe('Unlink user', () => {
    let linkedUser: IdentityProviderApplicationUser;
    beforeEach(async () => {
      linkedUser = await client.identityProviderApi.linkUserToIdentityProvider({
        idpId: idp.id, 
        userId: user.id, 
        userIdentityProviderLinkRequest: { externalId: 'externalId' }
      });
    });

    it('should unlink user from idp', async () => {
      await client.identityProviderApi.unlinkUserFromIdentityProvider({
        idpId: idp.id, 
        userId: linkedUser.id, 
      });
      try {
        await client.identityProviderApi.getIdentityProviderApplicationUser({
          idpId: idp.id, 
          userId: linkedUser.id
        });
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('List social auth tokens', () => {
    it('should return a Collection', async () => {
      const tokens = await client.identityProviderApi.listSocialAuthTokens({
        idpId: idp.id, 
        userId: user.id
      });
      expect(tokens).to.be.instanceOf(Collection);
    });
  });
});
