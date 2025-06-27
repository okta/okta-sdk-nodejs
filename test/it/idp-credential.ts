import { expect } from 'chai';
import {
  ApiClient,
  Collection,
  IdPCsr,
  DefaultRequestExecutor,
  IdentityProvider,
  IdPKeyCredential,
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

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Idp credential API', () => {
  let idp: IdentityProvider;
  before(async () => {
    idp = await client.identityProviderApi.createIdentityProvider({
      identityProvider: getMockGenericOidcIdp()
    });
  });

  after(async () => {
    await client.identityProviderApi.deleteIdentityProvider({idpId: idp.id});
  });

  describe('Key', () => {
    let key: IdPKeyCredential;
    describe('List keys', () => {
      beforeEach(async () => {
        key = await client.identityProviderApi.createIdentityProviderKey({jsonWebKey: mockJwk});
      });
      afterEach(async () => {
        await client.identityProviderApi.deleteIdentityProviderKey({kid: key.kid});
      });

      it('should return a Collection', async () => {
        const keys = await client.identityProviderApi.listIdentityProviderKeys();
        expect(keys).to.be.instanceOf(Collection);
      });

      it('should resolve IdPKeyCredential in collection', async () => {
        await (await client.identityProviderApi.listIdentityProviderKeys()).each(key => {
          expect(key).to.be.instanceOf(IdPKeyCredential);
        });
      });
    });

    describe('Create key', () => {
      afterEach(async () => {
        await client.identityProviderApi.deleteIdentityProviderKey({kid: key.kid});
      });

      it('should create key', async () => {
        key = await client.identityProviderApi.createIdentityProviderKey({jsonWebKey: mockJwk});
        expect(key).to.be.exist;
        expect(key).to.be.instanceOf(IdPKeyCredential);
      });
    });

    describe('Get key', () => {
      beforeEach(async () => {
        key = await client.identityProviderApi.createIdentityProviderKey({jsonWebKey: mockJwk});
      });
      afterEach(async () => {
        await client.identityProviderApi.deleteIdentityProviderKey({kid: key.kid});
      });

      it('should get key', async () => {
        key = await client.identityProviderApi.getIdentityProviderKey({kid: key.kid});
        expect(key).to.be.exist;
        expect(key).to.be.instanceOf(IdPKeyCredential);
      });
    });

    describe('Delete key', () => {
      beforeEach(async () => {
        key = await client.identityProviderApi.createIdentityProviderKey({jsonWebKey: mockJwk});
      });

      it('should delete key', async () => {
        await client.identityProviderApi.deleteIdentityProviderKey({kid: key.kid});
        try {
          await client.identityProviderApi.getIdentityProviderKey({kid: key.kid});
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });

  describe('Signing CSR', () => {
    let csr: IdPCsr, keys: forge.pki.KeyPair;
    describe('List signing csrs', () => {
      beforeEach(async () => {
        csr = await client.identityProviderApi.generateCsrForIdentityProvider({idpId: idp.id, metadata: mockCsr});
      });
      afterEach(async () => {
        await client.identityProviderApi.revokeCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
      });

      it('should return a Collection', async () => {
        const csrs = await client.identityProviderApi.listCsrsForIdentityProvider({idpId: idp.id});
        expect(csrs).to.be.instanceOf(Collection);
      });

      it('should resolve CSR in collection', async () => {
        await (await client.identityProviderApi.listCsrsForIdentityProvider({idpId: idp.id})).each(csr => {
          expect(csr).to.be.instanceOf(IdPCsr);
        });
      });
    });

    describe('Generate signing csr', () => {
      afterEach(async () => {
        await client.identityProviderApi.revokeCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
      });

      it('should generate csr', async () => {
        csr = await client.identityProviderApi.generateCsrForIdentityProvider({idpId: idp.id, metadata: mockCsr});
        expect(csr).to.be.exist;
      });
    });

    describe('Delete signing csr', () => {
      beforeEach(async () => {
        csr = await client.identityProviderApi.generateCsrForIdentityProvider({idpId: idp.id, metadata: mockCsr});
      });

      it('should delete csr', async () => {
        await client.identityProviderApi.revokeCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
        try {
          csr = await client.identityProviderApi.getCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

    describe('Publish signing csr', () => {
      beforeEach(async () => {
        keys = forge.pki.rsa.generateKeyPair(2048);
        csr = await client.identityProviderApi.generateCsrForIdentityProvider({idpId: idp.id, metadata: mockCsr});
      });

      it('should publish cert and remove csr (DER base64)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const b64 = utils.certToBase64(certF);
        const n = utils.csrToN(csr);

        const key = await client.identityProviderApi.publishCsrForIdentityProvider({
          idpId: idp.id,
          idpCsrId: csr.id,
          body: {
            data: Buffer.from(b64),
            name: 'csr.der'
          }
        });
        expect(key).to.be.instanceOf(IdPKeyCredential);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.identityProviderApi.getCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });

      it('should publish cert and remove csr (PEM)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const b64 = utils.certToBase64(certF);
        const pem = utils.certToPem(certF);
        const n = utils.csrToN(csr);

        const key = await client.identityProviderApi.publishCsrForIdentityProvider({
          idpId: idp.id,
          idpCsrId: csr.id,
          body: {
            data: Buffer.from(pem),
            name: 'csr.pem'
          }
        });
        expect(key).to.be.instanceOf(IdPKeyCredential);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.identityProviderApi.getCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });

      it('should publish cert and remove csr (DER)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const der = utils.certToDer(certF);
        const b64 = utils.certToBase64(certF);
        const n = utils.csrToN(csr);

        const key = await client.identityProviderApi.publishCsrForIdentityProvider({
          idpId: idp.id,
          idpCsrId: csr.id,
          body: {
            data: Buffer.from(der),
            name: 'csr.der'
          }
        });
        expect(key).to.be.instanceOf(IdPKeyCredential);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.identityProviderApi.getCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

    describe('Get csr', () => {
      beforeEach(async () => {
        csr = await client.identityProviderApi.generateCsrForIdentityProvider({idpId: idp.id, metadata: mockCsr});
      });
      afterEach(async () => {
        await client.identityProviderApi.revokeCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
      });

      it('should get csr', async () => {
        csr = await client.identityProviderApi.getCsrForIdentityProvider({idpId: idp.id, idpCsrId: csr.id});
        expect(csr).to.be.exist;
      });
    });
  });

  describe('Signing Key', () => {
    let key: IdPKeyCredential;
    describe('List signing keys', () => {
      beforeEach(async () => {
        key = await client.identityProviderApi.generateIdentityProviderSigningKey({idpId: idp.id, validityYears: 2});
      });

      it('should return a Collection', async () => {
        const keys = await client.identityProviderApi.listIdentityProviderSigningKeys({idpId: idp.id});
        expect(keys).to.be.instanceOf(Collection);
      });

      it('should resolve IdPKeyCredential in collection', async () => {
        await (await client.identityProviderApi.listIdentityProviderSigningKeys({idpId: idp.id})).each(key => {
          expect(key).to.be.instanceOf(IdPKeyCredential);
        });
      });

    });

    describe('Generate signing keys', () => {
      it('should generate csr', async () => {
        key = await client.identityProviderApi.generateCsrForIdentityProvider({idpId: idp.id, metadata: mockCsr});
        expect(key).to.be.exist;
      });
    });

    describe('Get signing keys', () => {
      beforeEach(async () => {
        key = await client.identityProviderApi.generateIdentityProviderSigningKey({idpId: idp.id, validityYears: 2});
      });

      it('should return a Collection', async () => {
        key = await client.identityProviderApi.getIdentityProviderSigningKey({idpId: idp.id, kid: key.kid});
        expect(key).to.be.exist;
      });
    });

    describe('Clone key', () => {
      let anotherIdp: IdentityProvider;
      beforeEach(async () => {
        const anotherMockGenericOidcIdp = getMockGenericOidcIdp();
        anotherIdp = await client.identityProviderApi.createIdentityProvider({identityProvider: anotherMockGenericOidcIdp});
        key = await client.identityProviderApi.generateIdentityProviderSigningKey({idpId: idp.id, validityYears: 2});
      });

      afterEach(async () => {
        await client.identityProviderApi.deleteIdentityProvider({idpId: anotherIdp.id});
      });

      it('should clone key to another idp', async () => {
        const clonedKey = await client.identityProviderApi.cloneIdentityProviderKey({idpId: idp.id, kid: key.kid, targetIdpId: anotherIdp.id });
        expect(clonedKey).to.be.exist;
        expect(clonedKey).to.be.instanceOf(IdPKeyCredential);
      });
    });
  });
});
