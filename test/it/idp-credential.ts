import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import forge = require('node-forge');
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import mockJwk = require('./mocks/jwk.json');
import mockCsr = require('./mocks/csr.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-credential`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Idp credential API', () => {
  let idp;
  before(async () => {
    idp = await client.createIdentityProvider(getMockGenericOidcIdp());
  });

  after(async () => {
    await client.deleteIdentityProvider(idp.id);
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
        const keys = await client.listIdentityProviderKeys();
        expect(keys).to.be.instanceOf(Collection);
      });

      it('should resolve JsonWebKey in collection', async () => {
        await (await client.listIdentityProviderKeys()).each(key => {
          expect(key).to.be.instanceOf(v3.JsonWebKey);
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
        expect(key).to.be.instanceOf(v3.JsonWebKey);
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
        expect(key).to.be.instanceOf(v3.JsonWebKey);
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
    let csr, keys;
    describe('List signing csrs', () => {
      beforeEach(async () => {
        csr = await client.generateCsrForIdentityProvider(idp.id, mockCsr);
      });
      afterEach(async () => {
        await client.revokeCsrForIdentityProvider(idp.id, csr.id);
      });

      it('should return a Collection', async () => {
        const csrs = await client.listCsrsForIdentityProvider(idp.id);
        expect(csrs).to.be.instanceOf(Collection);
      });

      it('should resolve CSR in collection', async () => {
        await (await client.listCsrsForIdentityProvider(idp.id)).each(csr => {
          expect(csr).to.be.instanceOf(v3.Csr);
        });
      });
    });

    describe('Generate signing csr', () => {
      afterEach(async () => {
        await client.revokeCsrForIdentityProvider(idp.id, csr.id);
      });

      it('should generate csr', async () => {
        csr = await client.generateCsrForIdentityProvider(idp.id, mockCsr);
        expect(csr).to.be.exist;
      });
    });

    describe('Delete signing csr', () => {
      beforeEach(async () => {
        csr = await client.generateCsrForIdentityProvider(idp.id, mockCsr);
      });

      it('should delete csr', async () => {
        await client.revokeCsrForIdentityProvider(idp.id, csr.id);
        try {
          csr = await client.getCsrForIdentityProvider(idp.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

    describe('Publish signing csr', () => {
      beforeEach(async () => {
        keys = forge.pki.rsa.generateKeyPair(2048);
        csr = await client.generateCsrForIdentityProvider(idp.id, mockCsr);
      });

      it('should publish cert and remove csr (DER base64)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const b64 = utils.certToBase64(certF);
        const n = utils.csrToN(csr);

        const key = await client.publishCerCertForIdentityProvider(idp.id, csr.id, b64);
        expect(key).to.be.instanceOf(v3.JsonWebKey);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.getCsrForIdentityProvider(idp.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });

      it('should publish cert and remove csr (PEM)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const b64 = utils.certToBase64(certF);
        const pem = utils.certToPem(certF);
        const n = utils.csrToN(csr);

        const key = await client.publishCerCertForIdentityProvider(idp.id, csr.id, pem);
        expect(key).to.be.instanceOf(v3.JsonWebKey);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.getCsrForIdentityProvider(idp.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });

      it('should publish cert and remove csr (DER)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const der = utils.certToDer(certF);
        const b64 = utils.certToBase64(certF);
        const n = utils.csrToN(csr);

        const key = await client.publishCerCertForIdentityProvider(idp.id, csr.id, der);
        expect(key).to.be.instanceOf(v3.JsonWebKey);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.getCsrForIdentityProvider(idp.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

    describe('Get csr', () => {
      beforeEach(async () => {
        csr = await client.generateCsrForIdentityProvider(idp.id, mockCsr);
      });
      afterEach(async () => {
        await client.revokeCsrForIdentityProvider(idp.id, csr.id);
      });

      it('should get csr', async () => {
        csr = await client.getCsrForIdentityProvider(idp.id, csr.id);
        expect(csr).to.be.exist;
      });
    });
  });

  describe('Signing Key', () => {
    let key;
    describe('List signing keys', () => {
      beforeEach(async () => {
        key = await client.generateIdentityProviderSigningKey(idp.id, { validityYears: 2 });
      });

      it('should return a Collection', async () => {
        const keys = await client.listIdentityProviderSigningKeys(idp.id);
        expect(keys).to.be.instanceOf(Collection);
      });

      it('should resolve JsonWebKey in collection', async () => {
        await (await client.listIdentityProviderSigningKeys(idp.id)).each(key => {
          expect(key).to.be.instanceOf(v3.JsonWebKey);
        });
      });

    });

    describe('Generate signing keys', () => {
      it('should generate csr', async () => {
        key = await client.generateCsrForIdentityProvider(idp.id, mockCsr);
        expect(key).to.be.exist;
      });
    });

    describe('Get signing keys', () => {
      beforeEach(async () => {
        key = await client.generateIdentityProviderSigningKey(idp.id, { validityYears: 2 });
      });

      it('should return a Collection', async () => {
        key = await client.getIdentityProviderSigningKey(idp.id, key.kid);
        expect(key).to.be.exist;
      });
    });

    describe('Clone key', () => {
      let anotherIdp;
      beforeEach(async () => {
        const anotherMockGenericOidcIdp = getMockGenericOidcIdp();
        anotherIdp = await client.createIdentityProvider(anotherMockGenericOidcIdp);
        key = await client.generateIdentityProviderSigningKey(idp.id, { validityYears: 2 });
      });

      afterEach(async () => {
        await client.deleteIdentityProvider(anotherIdp.id);
      });

      it('should clone key to another idp', async () => {
        const clonedKey = await client.cloneIdentityProviderKey(idp.id, key.kid, { targetIdpId: anotherIdp.id });
        expect(clonedKey).to.be.exist;
        expect(clonedKey).to.be.instanceOf(v3.JsonWebKey);
      });
    });
  });
});
