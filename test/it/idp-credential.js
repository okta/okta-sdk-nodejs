const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
const mockJwk = require('./mocks/jwk.json');
const mockCsr = require('./mocks/csr.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-credential`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Idp credential API', () => {
  let idp;
  before(async () => {
    idp = await client.createIdentityProvider(getMockGenericOidcIdp());
  });

  after(async () => {
    await idp.delete();
  });

  describe('Key', () => {
    let key;
    describe('List keys', () => {
      beforeEach(async () => {
        key = await client.createIdentityProviderKey(mockJwk);
      });
      afterEach(async () => {
        await client.deleteIdentityProviderKey(key.kid);
      });

      it('should return a Collection', async () => {
        const keys = client.listIdentityProviderKeys();
        expect(keys).to.be.instanceOf(Collection);
      });

      it('should resolve JsonWebKey in collection', async () => {
        await client.listIdentityProviderKeys().each(key => {
          expect(key).to.be.instanceOf(models.JsonWebKey);
        });
      });
    });

    describe('Create key', () => {
      afterEach(async () => {
        await client.deleteIdentityProviderKey(key.kid);
      });

      it('should create key', async () => {
        key = await client.createIdentityProviderKey(mockJwk);
        expect(key).to.be.exist;
        expect(key).to.be.instanceOf(models.JsonWebKey);
      });
    });

    describe('Get key', () => {
      beforeEach(async () => {
        key = await client.createIdentityProviderKey(mockJwk);
      });
      afterEach(async () => {
        await client.deleteIdentityProviderKey(key.kid);
      });

      it('should get key', async () => {
        key = await client.getIdentityProviderKey(key.kid);
        expect(key).to.be.exist;
        expect(key).to.be.instanceOf(models.JsonWebKey);
      });
    });

    describe('Delete key', () => {
      beforeEach(async () => {
        key = await client.createIdentityProviderKey(mockJwk);
      });

      it('should delete key', async () => {
        await client.deleteIdentityProviderKey(key.kid);
        try {
          await client.getIdentityProviderKey(key.kid);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });

  describe('Signing CSR', () => {
    let csr;
    describe('List signing csrs', () => {
      beforeEach(async () => {
        csr = await idp.generateCsr(mockCsr);
      });
      afterEach(async () => {
        await idp.deleteSigningCsr(csr.id);
      });

      it('should return a Collection', async () => {
        const csrs = idp.listSigningCsrs();
        expect(csrs).to.be.instanceOf(Collection);
      });

      it('should resolve CSR in collection', async () => {
        await idp.listSigningCsrs().each(csr => {
          expect(csr).to.be.instanceOf(models.Csr);
        });
      });
    });

    describe('Generate signing csr', () => {
      afterEach(async () => {
        await idp.deleteSigningCsr(csr.id);
      });

      it('should generate csr', async () => {
        csr = await idp.generateCsr(mockCsr);
        expect(csr).to.be.exist;
      });
    });

    describe('Delete signing csr', () => {
      beforeEach(async () => {
        csr = await idp.generateCsr(mockCsr);
      });

      it('should delete csr', async () => {
        await idp.deleteSigningCsr(csr.id);
        try {
          csr = await idp.getSigningCsr(csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

    describe('Get csr', () => {
      beforeEach(async () => {
        csr = await idp.generateCsr(mockCsr);
      });
      afterEach(async () => {
        await idp.deleteSigningCsr(csr.id);
      });

      it('should get csr', async () => {
        csr = await idp.getSigningCsr(csr.id);
        expect(csr).to.be.exist;
      });
    });
  });

  describe('Signing Key', () => {
    let key;
    describe('List signing keys', () => {
      beforeEach(async () => {
        key = await idp.generateSigningKey({ validityYears: 2 });
      });

      it('should return a Collection', async () => {
        const keys = await idp.listSigningKeys();
        expect(keys).to.be.instanceOf(Collection);
      });

      it('should resolve JsonWebKey in collection', async () => {
        await idp.listSigningKeys().each(key => {
          expect(key).to.be.instanceOf(models.JsonWebKey);
        });
      });

    });

    describe('Generate signing keys', () => {
      it('should generate csr', async () => {
        key = await idp.generateCsr(mockCsr);
        expect(key).to.be.exist;
      });
    });

    describe('Get signing keys', () => {
      beforeEach(async () => {
        key = await idp.generateSigningKey({ validityYears: 2 });
      });

      it('should return a Collection', async () => {
        key = await idp.getSigningKey(key.kid);
        expect(key).to.be.exist;
      });
    });

    describe('Clone key', () => {
      let anotherIdp;
      beforeEach(async () => {
        const anotherMockGenericOidcIdp = getMockGenericOidcIdp();
        anotherIdp = await client.createIdentityProvider(anotherMockGenericOidcIdp);
        key = await idp.generateSigningKey({ validityYears: 2 });
      });

      afterEach(async () => {
        await anotherIdp.delete();
      });

      it('should clone key to another idp', async () => {
        const clonedKey = await idp.cloneKey(key.kid, { targetIdpId: anotherIdp.id });
        expect(clonedKey).to.be.exist;
        expect(clonedKey).to.be.instanceOf(models.JsonWebKey);
      });
    });
  });
});
