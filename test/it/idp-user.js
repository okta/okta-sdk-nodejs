const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockGenericOidcIdp = require('./mocks/generic-oidc-idp.json');
const mockUser = require('./mocks/user-without-credentials.json');
const utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-user`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Idp User API', () => {
  let idp;
  let user;
  beforeEach(async () => {
    idp = await client.createIdentityProvider(mockGenericOidcIdp);
    user = await client.createUser(mockUser, { activate: false });
  });

  afterEach(async () => {
    await idp.delete();
    await utils.cleanupUser(client, user);
  });

  describe('List Linked IdP Users', () => {
    beforeEach(async () => {
      await idp.linkUser(user.id, { externalId: 'externalId' });
    });

    afterEach(async () => {
      await idp.unlinkUser(user.id);
    });

    it('should return a Collection', async () => {
      const users = await idp.listUsers();
      expect(users).to.be.instanceOf(Collection);
    });

    it('should resolve IdentityProviderApplicationUser in collection', async () => {
      await idp.listUsers().each(user => {
        expect(user).to.be.instanceOf(models.IdentityProviderApplicationUser);
      });
    });
  });

  describe('Get linked user for Idp', () => {
    beforeEach(async () => {
      await idp.linkUser(user.id, { externalId: 'externalId' });
    });

    afterEach(async () => {
      await idp.unlinkUser(user.id);
    });

    it('should return linked user as instanceof IdentityProviderApplicationUser', async () => {
      const idpUser = await idp.getUser(user.id);
      expect(idpUser).to.be.instanceOf(models.IdentityProviderApplicationUser);
    });

    it('should link to idp', async () => {
      const idpUser = await idp.getUser(user.id);
      expect(idpUser._links.idp.href).to.contains(idp.id);
    });
  });

  describe('Link user', () => {
    afterEach(async () => {
      await idp.unlinkUser(user.id);
    });

    it('should link user to idp', async () => {
      const linkedUser = await idp.linkUser(user.id, { externalId: 'externalId' });
      expect(linkedUser._links.idp.href).to.contains(idp.id);
    });
  });

  describe('Unlink user', () => {
    let linkedUser;
    beforeEach(async () => {
      linkedUser = await idp.linkUser(user.id, { externalId: 'externalId' });
    });

    it('should unlink user from idp', async () => {
      await idp.unlinkUser(linkedUser.id);
      try {
        await idp.getUser(linkedUser.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  // describe('Create idp', () => {
  //   let idp;
  //   afterEach(async () => {
  //     await idp.delete();
  //   });

  //   it('should return correct model', async () => {
  //     idp = await client.createIdentityProvider(mockGenericOidcIdp);
  //     expect(idp).to.be.instanceOf(models.IdentityProvider);
  //   });

  //   it('should return correct data with id assigned', async () => {
  //     idp = await client.createIdentityProvider(mockGenericOidcIdp);
  //     expect(idp).to.have.property('id');
  //     expect(idp.name).to.equal(mockGenericOidcIdp.name);
  //   });
  // });

  // describe('Delete idp', () => {
  //   let idp;
  //   beforeEach(async () => {
  //     idp = await client.createIdentityProvider(mockGenericOidcIdp);
  //   });

  //   it('should not get idp after deletion', async () => {
  //     await client.deleteIdentityProvider(idp.id);
  //     try {
  //       await client.getIdentityProvider(idp.id);
  //     } catch (e) {
  //       expect(e.status).to.equal(404);
  //     }
  //   });
  // });

  // describe('Get idp', () => {
  //   let idp;
  //   beforeEach(async () => {
  //     idp = await client.createIdentityProvider(mockGenericOidcIdp);
  //   });

  //   afterEach(async () => {
  //     await idp.delete();
  //   });

  //   it('should get IdentityProvider by id', async () => {
  //     const idpFromGet = await client.getIdentityProvider(idp.id);
  //     expect(idpFromGet).to.be.instanceOf(models.IdentityProvider);
  //     expect(idpFromGet.name).to.equal(mockGenericOidcIdp.name);
  //   });
  // });

  // describe('Update idp', () => {
  //   let idp;
  //   let updatedIdp;
  //   beforeEach(async () => {
  //     idp = await client.createIdentityProvider(mockGenericOidcIdp);
  //   });

  //   afterEach(async () => {
  //     await idp.delete();
  //   });

  //   it('should update all properties in template', async () => {
  //     const mock = deepcopy(mockGenericOidcIdp);
  //     mock.name = 'Mock update idp';
  //     updatedIdp = await client.updateIdentityProvider(idp.id, mock);
  //     expect(updatedIdp.id).to.equal(idp.id);
  //     expect(updatedIdp.name).to.equal(mock.name);
  //   });
  // });
});
