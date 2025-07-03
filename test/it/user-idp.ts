import { expect } from 'chai';
import {
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  IdentityProvider,
  User
} from '@okta/okta-sdk-nodejs';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import getMockUser = require('./mocks/user-without-credentials');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-idp`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User idp API', () => {
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

  describe('List Linked IdPs for User', () => {
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
        userId: user.id
      });
    });

    it('should return a Collection and resolve IdentityProvider in collection', async () => {
      const idps = await client.userApi.listUserIdentityProviders({
        userId: user.id
      });
      expect(idps).to.be.instanceOf(Collection);
      await idps.each(idpFromCollection => {
        expect(idpFromCollection).to.be.instanceOf(IdentityProvider);
        expect(idpFromCollection.id).to.be.equal(idp.id);
      });
    });
  });
});
