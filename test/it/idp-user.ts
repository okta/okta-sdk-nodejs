import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  IdentityProviderApplicationUser } from '@okta/okta-sdk-nodejs';
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
  let idp;
  let user;
  before(async () => {
    idp = await client.createIdentityProvider(getMockGenericOidcIdp());
    user = await client.createUser(getMockUser(), false);
  });

  after(async () => {
    await client.deleteIdentityProvider(idp.id);
    //await idp.delete();
    await utils.cleanupUser(client, user);
  });

  describe('List Linked IdP Users', () => {
    beforeEach(async () => {
      await client.linkUserToIdentityProvider(idp.id, user.id, {externalId: 'externalId'});
      // await idp.linkUser(user.id, { externalId: 'externalId' });
    });

    afterEach(async () => {
      await client.unlinkUserFromIdentityProvider(idp.id, user.id);
      //await idp.unlinkUser(user.id);
    });

    it('should return a Collection', async () => {
      const users = await client.listIdentityProviderApplicationUsers(idp.id);
      //const users = await idp.listUsers();
      expect(users).not.to.equal(null);
    });

    it('should resolve IdentityProviderApplicationUser in collection', async () => {
      (await client.listIdentityProviderApplicationUsers(idp.id)).forEach(user => {
        expect(user).to.be.instanceOf(IdentityProviderApplicationUser);
      });
    });
  });

  describe('Get linked user for Idp', () => {
    beforeEach(async () => {
      await client.linkUserToIdentityProvider(idp.id, user.id, {externalId: 'externalId'});
      //await idp.linkUser(user.id, { externalId: 'externalId' });
    });

    afterEach(async () => {
      await client.unlinkUserFromIdentityProvider(idp.id, user.id);
      //await idp.unlinkUser(user.id);
    });

    it('should return linked user as instanceof IdentityProviderApplicationUser', async () => {
      const idpUser = await client.getIdentityProviderApplicationUser(idp.id, user.id);
      //const idpUser = await idp.getUser(user.id);
      expect(idpUser).to.be.instanceOf(IdentityProviderApplicationUser);
    });

    it('should link to idp', async () => {
      const idpUser = await client.getIdentityProviderApplicationUser(idp.id, user.id);
      //const idpUser = await idp.getUser(user.id);
      //@ts-ignore
      expect(idpUser._links.idp.href).to.contains(idp.id);
    });
  });

  describe('Link user', () => {
    afterEach(async () => {
      await client.unlinkUserFromIdentityProvider(idp.id, user.id);
      //await idp.unlinkUser(user.id);
    });

    it('should link user to idp', async () => {
      //const linkedUser = await idp.linkUser(user.id, { externalId: 'externalId' });
      const linkedUser = await client.linkUserToIdentityProvider(idp.id, user.id, {externalId: 'externalId'});
      //@ts-ignore
      expect(linkedUser._links.idp.href).to.contains(idp.id);
    });
  });

  describe('Unlink user', () => {
    let linkedUser;
    beforeEach(async () => {
      linkedUser = await client.linkUserToIdentityProvider(idp.id, user.id, {externalId: 'externalId'});
      //linkedUser = await idp.linkUser(user.id, { externalId: 'externalId' });
    });

    it('should unlink user from idp', async () => {
      await client.unlinkUserFromIdentityProvider(idp.id, linkedUser.id);
      //await idp.unlinkUser(linkedUser.id);
      try {
        await client.getIdentityProviderApplicationUser(idp.id, linkedUser.id);
        //await idp.getUser(linkedUser.id);
      } catch (e) {
        expect(e.statusCode).to.equal(404);
      }
    });
  });

  describe('List social auth tokens', () => {
    it('should return a Collection', async () => {
      const tokens = await client.listSocialAuthTokens(idp.id, user.id);
      //const tokens = await idp.listSocialAuthTokens(user.id);
      expect(tokens).not.to.equal(null);
    });
  });
});
