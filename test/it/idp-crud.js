const expect = require('chai').expect;
const deepcopy = require('deep-copy');
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockGenericOidcIdp = require('./mocks/generic-oidc-idp.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-crud`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Idp Crud API', () => {
  describe('List idps', () => {
    let idp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
    });

    afterEach(async () => {
      await idp.delete();
    });

    it('should return a Collection', async () => {
      const idps = await client.listIdentityProviders();
      expect(idps).to.be.instanceOf(Collection);
    });

    it('should resolve IdentityProvider in collection', async () => {
      await client.listIdentityProviders().each(idp => {
        expect(idp).to.be.instanceOf(models.IdentityProvider);
      });
    });

    it('should return a collection of idp by type', async () => {
      let count = 0;
      await client.listIdentityProviders({ type: 'OIDC' }).each(idp => {
        expect(idp.type).to.equal('OIDC');
        count++;
      });
      expect(count).to.equal(1);
    });

    it('should return a collection of idp by q', async () => {
      let count = 0;
      await client.listIdentityProviders({ q: 'OIDC' }).each(idp => {
        expect(idp.type).to.equal('OIDC');
        count++;
      });
      expect(count).to.equal(1);
    });
  });

  describe('Create idp', () => {
    let idp;
    afterEach(async () => {
      await idp.delete();
    });

    it('should return correct model', async () => {
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
      expect(idp).to.be.instanceOf(models.IdentityProvider);
    });

    it('should return correct data with id assigned', async () => {
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
      expect(idp).to.have.property('id');
      expect(idp.name).to.equal(mockGenericOidcIdp.name);
    });
  });

  describe('Delete idp', () => {
    let idp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
    });

    it('should not get idp after deletion', async () => {
      await client.deleteIdentityProvider(idp.id);
      try {
        await client.getIdentityProvider(idp.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('Get idp', () => {
    let idp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
    });

    afterEach(async () => {
      await idp.delete();
    });

    it('should get IdentityProvider by id', async () => {
      const idpFromGet = await client.getIdentityProvider(idp.id);
      expect(idpFromGet).to.be.instanceOf(models.IdentityProvider);
      expect(idpFromGet.name).to.equal(mockGenericOidcIdp.name);
    });
  });

  describe('Update idp', () => {
    let idp;
    let updatedIdp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
    });

    afterEach(async () => {
      await idp.delete();
    });

    it('should update all properties in template', async () => {
      const mock = deepcopy(mockGenericOidcIdp);
      mock.name = 'Mock update idp';
      updatedIdp = await client.updateIdentityProvider(idp.id, mock);
      expect(updatedIdp.id).to.equal(idp.id);
      expect(updatedIdp.name).to.equal(mock.name);
    });
  });
});
