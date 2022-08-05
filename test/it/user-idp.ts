import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  IdentityProvider,
} from '@okta/okta-sdk-nodejs';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import getMockUser = require('./mocks/user-without-credentials');
import utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-idp`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User idp API', () => {
  let idp;
  let user;
  before(async () => {
    idp = await client.createIdentityProvider(getMockGenericOidcIdp());
    user = await client.createUser(getMockUser(), { activate: false });
  });

  after(async () => {
    await client.deleteIdentityProvider(idp.id);
    await utils.cleanupUser(client, user);
  });

  describe('List Linked IdPs for User', () => {
    beforeEach(async () => {
      await client.linkUserToIdentityProvider(idp.id, user.id, { externalId: 'externalId' });
    });

    afterEach(async () => {
      await client.unlinkUserFromIdentityProvider(idp.id, user.id);
    });

    it('should return a Collection and resolve IdentityProvider in collection', async () => {
      const idps = await client.listUserIdentityProviders(user.id);
      expect(idps).to.be.instanceOf(Collection);
      await idps.each(idpFromCollection => {
        expect(idpFromCollection).to.be.instanceOf(IdentityProvider);
        expect(idpFromCollection.id).to.be.equal(idp.id);
      });
    });
  });
});
